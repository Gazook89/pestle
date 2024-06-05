import React, { useContext } from "react";
import { SvgContext } from "./SvgContext";
import styles from "./Sidebar.module.css";

import { SketchPicker } from 'react-color';

const Sidebar = () => {
	const { config } = useContext(SvgContext);

	const handleInputChange = (selector, property, value) => {
		const applyChange = (element) => {
			if (element) {
				element.style[property] = value;
			}
		};

		if (Array.isArray(selector)) {
			selector.forEach(sel => {
				if (!sel || sel.trim() === '') return;
				const elements = document.querySelectorAll(sel);
				elements?.forEach(applyChange);
			});
		} else {
			if (!selector || selector.trim() === '') return;
			const elements = document.querySelectorAll(selector);
			elements?.forEach(applyChange);
		}
	};

	const renderInput = (input, index) => {
		switch (input.type) {
			case 'color':
				return (
					<div key={index}>
						<label>{input.label}</label>
						<SketchPicker color={input.defaultValue} onChange={handleInputChange(input.selector, input.property, e.target.value)} />
						{/* <input
							type="color"
							defaultValue={input.defaultValue}
							onInput={(e) => handleInputChange(input.selector, input.property, e.target.value)}
						/> */}
					</div>
				);
			case 'range':
				return (
					<div key={index}>
						<label>{input.label}</label>
						<input
							type="range"
							min={input.min}
							max={input.max}
							step={input.step}
							defaultValue={input.defaultValue}
							list={input.label}
							onInput={(e) => handleInputChange(input.selector, input.property, `${e.target.value}px`)}
						/>
						<datalist id={input.label}>
							<option value={input.defaultValue}></option>
						</datalist>
					</div>
				);
			default: return null;
		}
	};

	return (
		<div className={styles.sidebar} >
			{config?.inputs.map((input, index) => renderInput(input, index))}
		</div>
	);
};

export default Sidebar;
