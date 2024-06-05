import React, { useEffect, useRef, useContext } from "react";
import { SVG } from "@svgdotjs/svg.js";
import { SvgContext } from "./SvgContext";
import styles from "./SVGEditor.module.css";

const Editor = ({ svgImage }) => {
	const svgRef = useRef(null);
	const { svgContent, setSvgContent } = useContext(SvgContext);

	useEffect(() => {
		// Fetch the SVG content
		fetch(`/svg/${svgImage}.svg`)
			.then(response => response.text())
			.then(data => setSvgContent(data))
			.catch(error => console.error('Error loading SVG:', error));
	}, [svgImage, setSvgContent]);

	useEffect(() => {
		if (svgContent && svgRef.current) {
			// Clear the existing content
			const draw = SVG(svgRef.current);
			draw.clear();

			// Load the fetched SVG content into the drawing context
			draw.svg(svgContent);
		}
	}, [svgContent]);

	return (
		<div className={styles.editorContainer}>
			<div ref={svgRef} className={styles.editor} />
		</div>
	);
};

export default Editor;
