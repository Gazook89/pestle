import React, { useEffect, useState } from 'react';
import { SvgContext } from './SvgContext';
import styles from "./PreviewToolbar.module.css";
import "@melloware/coloris/dist/coloris.css";
import { on } from '@svgdotjs/svg.js';

const PreviewToolbar = ({ onCanvasColorChange, onViewChange }) => {
	const {config, svgRef} = React.useContext(SvgContext);

	

	const resizeSVG = (evt) => {
		if (!svgRef.current) return;
		const newSize = evt.target.value;
		svgRef.current.style.width = `${newSize}px`;
	};



	return (
		<div className={styles.previewToolbar} >
			<fieldset onChange={(evt)=>onViewChange(evt.target.id)}>
				<label>Preview<input type='radio' id='preview' name='view' defaultChecked/></label>
				<label>CSS<input type='radio' id='css' name='view' /></label>
			</fieldset>
			<label>Zoom:<input type='range' min='100' max='1000' onInput={(evt) => resizeSVG(evt)} /></label>
			<label>Preview Background
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