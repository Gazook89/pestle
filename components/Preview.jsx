import React, { useEffect, useContext, useState } from "react";
import { SVG, extend as SVGextend, Element as SVGElement } from "@svgdotjs/svg.js";
import { SvgContext } from "./SvgContext";
import styles from "./Preview.module.css";

import PreviewToolbar from "./PreviewToolbar";

const Preview = ({ svgImage }) => {
	const { config, svgRef } = useContext(SvgContext);
	const [svgContent, setSvgContent] = useState(null);
	const [canvasColor, setCanvasColor] = useState('');
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
		config.inputs.forEach((input)=>{
			if(input.selector && input.property && input.defaultValue) {
				css += `${input.selector[0]} {\n  ${input.property}: ${input.defaultValue};\n}\n\n`;
			}
		})
		return css
	};


	return (
		<div className={styles.preview} style={{ backgroundColor: canvasColor }}>
			<PreviewToolbar svg={svgRef.current} onCanvasColorChange={setCanvasColor} onViewChange={setView} />
			<div className={styles.svgCanvas} ref={svgRef} />
			<div className={styles.cssView} style={{display: view === 'preview' ? 'none' : ''}}><textarea value={compileCSS()} /></div>
			
		</div>
	);
};

export default Preview;
