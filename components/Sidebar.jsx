import React, { useContext, useEffect } from "react";
import { SVG } from "@svgdotjs/svg.js";
import { SvgContext } from "./SvgContext";
import styles from "./Sidebar.module.css";
import "@melloware/coloris/dist/coloris.css";

const Sidebar = ({ children }) => {
	const { config, svgRef } = useContext(SvgContext);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const Coloris = require("@melloware/coloris");
			Coloris.init();
			Coloris({ margin: 5, selectInput: true, closeButton: true, closeLabel: 'close', theme: 'large' });
		}
	}, []);

	// Update color inputs when the config changes
	useEffect(() => {
		const inputs = document.querySelectorAll("[data-coloris]");
		inputs.forEach((input) => {
			input.value = input.defaultValue;
			input.dispatchEvent(new Event('input', { bubbles: true })); // Trigger input event
		});
	}, [config]);

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

	const generatePNG = () => {
		const svgElement = svgRef.current.querySelector("svg");

		// Hide elements as required
		config.hiddenElements.forEach((el) => {
			SVG(svgElement).find(el).hide();
		});

		const svgString = new XMLSerializer().serializeToString(svgElement);
		const canvas = document.createElement("canvas");
		const context = canvas.getContext("2d");

		// Get the viewBox dimensions
		const viewBox = svgElement.viewBox.baseVal;
		let width, height;
		if (viewBox) {
			width = viewBox.width;
			height = viewBox.height;
		} else {
			const svgRect = svgElement.getBoundingClientRect();
			width = svgRect.width;
			height = svgRect.height;
		}

		canvas.width = width;
		canvas.height = height;

		const img = new Image();
		const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
		const url = URL.createObjectURL(svgBlob);

		img.onload = () => {
			// Ensure the SVG content fits the canvas
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.drawImage(img, 0, 0, canvas.width, canvas.height);
			URL.revokeObjectURL(url);

			// Display the PNG on the page
			const pngUrl = canvas.toDataURL("image/png");
			const imgElement = document.createElement("img");
			imgElement.src = pngUrl;
			document.getElementById("png-preview").prepend(imgElement);
		};

		// Show elements to reset
		config.hiddenElements.forEach((el) => {
			SVG(svgElement).find(el).show();
		});

		img.src = url;
	};

	const renderInput = (input, index) => {
		switch (input.type) {
			case 'color':
				return (
					<div key={index} className={styles.inputField}>
						<label>{input.label}</label>
						<input
							type="text"
							defaultValue={input.defaultValue}
							onInput={(e) => handleInputChange(input.selector, input.property, e.target.value)}
							data-coloris
						/>
					</div>
				);
			case 'range':
				return (
					<div key={index} className={styles.inputField}>
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
		<div className={styles.sidebar}>
			{children}
			<div className={styles.controls}>
				{config?.inputs.map((input, index) => renderInput(input, index))}
			</div>
			<div className={styles.buttons}>
				<button className={styles.primary} onClick={generatePNG}>Generate PNG</button>
				<button onClick={() => document.getElementById("png-preview").innerHTML = ''}>Clear Previews</button>
			</div>
			<div id="png-preview" className={styles.previews} />
		</div>
	);
};

export default Sidebar;
