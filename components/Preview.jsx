import React, { useEffect, useContext, useState } from "react";
import { SVG, extend as SVGextend, Element as SVGElement } from "@svgdotjs/svg.js";
import { SvgContext } from "./SvgContext";
import styles from "./Preview.module.css";

import PreviewToolbar from "./PreviewToolbar";

const Preview = ({ svgImage }) => {
	const { config, svgRef, cssOutput } = useContext(SvgContext);
	const [svgContent, setSvgContent] = useState(null);
	const [canvasColor, setCanvasColor] = useState('transparent');
	const [view, setView] = useState('preview');

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

	return (
		<div className={styles.preview} style={{ backgroundColor: canvasColor }}>
			<PreviewToolbar svg={svgRef.current} onCanvasColorChange={setCanvasColor} onViewChange={setView} />
			<div className='svgCanvas' ref={svgRef} />
			<div className={styles.cssView} style={{display: view === 'preview' ? 'none' : ''}}>
				<div>
					{compileCSS()}
					<button onClick={() => { copyToClipboard(compileCSS()) }}>Copy CSS</button>
				</div>
				
			</div>
			
		</div>
	);
};

export default Preview;
