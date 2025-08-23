import React, { useEffect, useState } from 'react';
import { SvgContext } from './SvgContext';
import styles from "./PreviewToolbar.module.css";
import "@melloware/coloris/dist/coloris.css";
import { on } from '@svgdotjs/svg.js';

const PreviewToolbar = ({ onCanvasColorChange, onViewChange }) => {
	const {config, svgRef} = React.useContext(SvgContext);

	useEffect(() => {
			if (typeof window !== "undefined") {
				const Coloris = require("@melloware/coloris");
				Coloris.init();
				Coloris({ margin: 5, selectInput: true, closeButton: true, closeLabel: 'close', theme: 'large' });
			}
		}, []);
	

	const resizeSVG = (evt) => {
		if (!svgRef.current) return;
		const newSize = evt.target.value;
		svgRef.current.querySelector('svg').style.transform = `scale(${newSize / 100})`;
	};



	return (
		<div className={styles.previewToolbar} >
			<label>Zoom:<input type='range' min='10' max='300' onInput={(evt) => resizeSVG(evt)} /></label>
			<label>Background: 
				<input
                            type="text"
                            onInput={(e)=>{onCanvasColorChange(e.target.value)}}
                            data-coloris
                            
                        />
			</label>
		</div>
	);
};

export default PreviewToolbar;