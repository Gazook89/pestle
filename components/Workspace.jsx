import React, { useEffect, useContext, useState, useRef } from "react";
import { SVG, extend as SVGextend, Element as SVGElement } from "@svgdotjs/svg.js";
import { SvgContext } from "./SvgContext";
import styles from "./Workspace.module.css";
import "@melloware/coloris/dist/coloris.css";
import * as htmlToImage from 'html-to-image';

import PreviewToolbar from "./PreviewToolbar";

const Workspace = ({ svgImage }) => {
	const { config, svgRef, cssOutput } = useContext(SvgContext);
	const [svgContent, setSvgContent] = useState(null);
	const [canvasColor, setCanvasColor] = useState('transparent');
	const [view, setView] = useState('preview');
	const pngRef = useRef(null);

	useEffect(() => {
		// Fetch the SVG content
		fetch(`/svg/${svgImage}.svg`)
			.then(response => response.text())
			.then(data => setSvgContent(data))
			.catch(error => console.error('Error loading SVG:', error));
	}, [svgImage]);

	useEffect(() => {
		if (svgContent && svgRef.current) {
			// Clear the existing content
			const draw = SVG(svgRef.current)
			draw.clear();

			// Load the fetched SVG content into the drawing context
			const editorItem = draw.svg(svgContent);
			editorItem.node.style.width = null;
		}
	}, [svgContent]);

	const compileCSS = ()=>{
		let css = '';
		config.inputs.map((input)=>{
			if(!input.outputSelector || !input.outputProperty) return;
			css += `${input.outputSelector} {\n  ${input.outputProperty}: ${input.value};\n}\n\n`;
		})
		return css
	};

	const copyToClipboard = (text) => {
		navigator.clipboard.writeText(text)
			.then(() => {
				alert('CSS copied to clipboard!');
			})
			.catch(err => {
				console.error('Failed to copy text: ', err);
				alert('Failed to copy CSS. Please try again.');
			});
	};

	const generatePNG = () => {
        const svgElement = svgRef.current.querySelector("svg");
		svgElement.closest('#preview').style.display = '';
        console.log('Generating PNG from SVG:', svgElement);
        config.hiddenElements?.forEach((selector) => {
            svgElement.querySelectorAll(selector).forEach((el) => {
                console.log('Hiding element for PNG generation:', el);
                el.style.visibility = 'hidden'; // Toggle hidden class for elements to be excluded
            });
        });

        htmlToImage.toPng(svgElement).then((dataUrl) => {
            const imgElement = document.createElement("img");
            imgElement.src = dataUrl;
            pngRef.current.innerHTML = ''; // Clear previous content
            pngRef.current.appendChild(imgElement);
        }).catch((error) => {
            console.error('Error generating PNG:', error);
        }).finally(() => {
            config.hiddenElements?.forEach((selector) => {
                svgElement.querySelectorAll(selector).forEach((el) => {
                    el.style.visibility = 'visible'; // Revert visibility change
                });
            });
        });

		svgElement.closest('#preview').style.display = 'none';
    };

	return (
		<div className={styles.workspace} style={{ backgroundColor: canvasColor }}>
			<div role='tablist' className={styles.tabs}>
				<button role='tab' aria-selected={view === 'preview' ? true : false} aria-controls='preview' onClick={() => setView('preview')}>Preview</button>
				<button role='tab' aria-selected={view === 'css' ? true : false} aria-controls='css' onClick={() => setView('css')}>CSS</button>
				<button role='tab' aria-selected={view === 'png' ? true : false} aria-controls='png 'onClick={() => {generatePNG(); setView('png'); }}>PNG</button>
				<button role='tab' aria-selected={view === 'help' ? true : false} aria-controls='help' onClick={() => setView('help')}>Help</button>
			</div>
			<div id='preview' className={styles.preview} role='tabpanel' style={{ display: view === 'preview' ? null : 'none' }}>
				<div className={styles.svgCanvas} ref={svgRef} />
			</div>
			{view === 'preview' && <PreviewToolbar svg={svgRef.current} onCanvasColorChange={setCanvasColor} />}
			<div id='css' className={styles.cssView} role='tabpanel' style={{display: view === 'css' ? null : 'none'}}>
				<div>
					{compileCSS()}
					<button onClick={() => { copyToClipboard(compileCSS()) }}>Copy CSS</button>
				</div>
			</div>
			<div id='png' className={styles.pngView} role='tabpanel' style={{display: view === 'png' ? null : 'none'}}>
				<div id="png-output" ref={pngRef}></div>
			</div>
			<div id='help' className={styles.helpView} role='tabpanel' style={{display: view === 'help' ? null : 'none'}}>
				<h2>Help & Instructions</h2>
				<p>Welcome to Pestle! This tool allows you to customize SVG templates and export them as PNG images along with the corresponding CSS for use in <a href="https://homebrewery.naturalcrit.com" rel="noreferrer noopener" target="_blank">the Homebrewery.</a></p>
				<h3>How to Use:</h3>
				<ol>
					<li>Select an SVG template from the dropdown in the sidebar and click "Create".</li>
					<li>Use the controls in the sidebar to adjust properties like colors, sizes, and more. The preview will update in real-time.</li>
					<li>Switch between "Preview", "CSS", and "PNG" tabs using the buttons at the top of the workspace.</li>
					<li>In the "CSS" tab, you can view and copy the generated CSS for your customizations.  Only the properties needed for use in the Homebrewery Style Editor will be available (noted with asterisks)-- others are baked into the PNG image.</li>
					<li>In the "PNG" tab, click "Generate PNG" to create a PNG image of your customized SVG. Upload this image file to an image hosting service like Imgur.com or ImgBB.com.  Then use the image URL provided by those services in your brew document.</li>
				</ol>
				<h3>Tips:</h3>
				<ul>
					{/* <li>Click on any generated PNG preview to load it back into the editor for further adjustments.</li> */}
					<li>Use the zoom slider in the preview toolbar to get a closer look at your design.</li>
					<li>Change the preview background color using the color picker in the preview toolbar for better visibility of your design.</li>
				</ul>
				<p>If you encounter any issues or have questions, please refer to the documentation or contact support.</p>
			</div>
		</div>
	);
};

export default Workspace;
