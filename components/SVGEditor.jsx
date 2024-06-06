import React, { useEffect, useRef, useContext, useState } from "react";
import { SVG } from "@svgdotjs/svg.js";
import { SvgContext } from "./SvgContext";
import styles from "./SVGEditor.module.css";

const Editor = ({ svgImage }) => {
	const svgRef = useRef(null);
	const [svgContent, setSvgContent] = useState(null);
	const { config } = useContext(SvgContext);

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

	return (
		<div className={styles.editor} ref={svgRef} />
	);
};

export default Editor;
