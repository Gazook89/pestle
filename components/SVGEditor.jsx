import React, { useEffect, useRef, useContext, useState } from "react";
import { SVG } from "@svgdotjs/svg.js";
import { SvgContext } from "./SvgContext";
import styles from "./SVGEditor.module.css";

const Editor = ({ svgImage }) => {
	const svgRef = useRef(null);
	const [svgContent, setSvgContent] = useState(null);
	const { config } = useContext(SvgContext);
	const [pngUrl, setPngUrl] = useState(null);

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
			const draw = SVG(svgRef.current);
			draw.clear();

			// Load the fetched SVG content into the drawing context
			const svgContentDrawn = draw.svg(svgContent);
		}
	}, [svgContent]);

	const generatePNG = () => {
		const svgElement = svgRef.current.querySelector("svg");
		config.hiddenElements.forEach((el)=>{
			SVG(svgElement).find(el).hide()
		})
		const svgString = new XMLSerializer().serializeToString(svgElement);
		const canvas = document.createElement("canvas");
		const context = canvas.getContext("2d");

		// Set canvas dimensions to the SVG dimensions
		const svgRect = svgElement.getBoundingClientRect();
		canvas.width = svgRect.width;
		canvas.height = svgRect.height;

		const img = new Image();
		const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
		const url = URL.createObjectURL(svgBlob);

		img.onload = () => {
			context.drawImage(img, 0, 0);
			URL.revokeObjectURL(url);

			// Create a PNG from the canvas and set the PNG URL state
			const pngDataUrl = canvas.toDataURL("image/png");
			setPngUrl(pngDataUrl);
		};

		img.src = url;


		config.hiddenElements.forEach((el)=>{
			SVG(svgElement).find(el).show()
		})
	};

	return (
		<>
			<button onClick={generatePNG}>Generate PNG</button>
			{pngUrl && (
				<div>
					<h3>Generated PNG:</h3>
					<img src={pngUrl} alt="Generated PNG" />
				</div>
			)}
			<div className={styles.editor} ref={svgRef} />
			
		</>
	);
};

export default Editor;
