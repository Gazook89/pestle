import React, { useContext, useEffect, useState } from "react";
import { SVG } from "@svgdotjs/svg.js";
import { SvgContext } from "./SvgContext";
import styles from "./Sidebar.module.css";
import "@melloware/coloris/dist/coloris.css";
import * as htmlToImage from 'html-to-image';

const Sidebar = ({ children, svgThumbnails }) => {
    const { config, svgRef, svgAppearance } = useContext(SvgContext);
    const [inputValues, setInputValues] = useState({});

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
        setInputValues(prevValues => ({ ...prevValues, [property]: value }));

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

        // Update the SVG in the Editor and the corresponding thumbnail
        updateSvgInEditorAndThumbnails(selector, property, value);
    };

    const updateSvgInEditorAndThumbnails = (selector, property, value) => {
        const preview = svgRef.current.querySelector("svg");
        const thumbnails = document.querySelectorAll(".svg-thumbnail");
		if(selector === undefined || property === undefined || value === undefined || !preview) return;

        const applyChange = (element) => {
            if (element) {
                element.style[property] = value;
            }
        };

        // Apply changes to the SVG in the Editor
        if (Array.isArray(selector)) {
            selector.forEach(sel => {
                if (!sel || sel.trim() === '') return;
                const elements = preview.querySelectorAll(sel);
                elements?.forEach(applyChange);
            });
        } else {
            if (selector.trim() === '') return;
            const elements = preview.querySelectorAll(selector);
            elements?.forEach(applyChange);
        }

        // Apply changes to the corresponding thumbnail
        thumbnails.forEach(thumbnail => {
            if (Array.isArray(selector)) {
                selector.forEach(sel => {
                    if (!sel || sel.trim() === '') return;
                    const elements = thumbnail.querySelectorAll(sel);
                    elements?.forEach(applyChange);
                });
            } else {
                if (!selector || selector.trim() === '') return;
                const elements = thumbnail.querySelectorAll(selector);
                elements?.forEach(applyChange);
            }
        });
    };

    const generatePNG = () => {
        const svgElement = svgRef.current.querySelector("svg");

        htmlToImage.toPng(svgElement).then((dataUrl) => {
            // Display the PNG in a modal
            const imgElement = document.createElement("img");
            imgElement.src = dataUrl;
            const modal = document.createElement("div");
            modal.style.position = 'fixed';
            modal.style.top = '50%';
            modal.style.left = '50%';
            modal.style.transform = 'translate(-50%, -50%)';
            modal.style.backgroundColor = 'white';
            modal.style.padding = '20px';
            modal.style.zIndex = 1000;
            modal.appendChild(imgElement);

            const closeButton = document.createElement("button");
            closeButton.textContent = "Close";
            closeButton.onclick = () => {
                document.body.removeChild(modal);
            };
            modal.appendChild(closeButton);

            document.body.appendChild(modal);
        });
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
                            data-property={input.property}
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
                            data-property={input.property}
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
                <button onClick={() => {
                    document.getElementById("png-preview").innerHTML = '';
                }}>Clear Previews</button>
            </div>
            <p>Generated SVGs - click to edit</p>
            <div id="png-preview" className={styles.previews}>
                {svgThumbnails.map((svgContent, index) => (
                    <div
                        key={index}
                        className="svg-thumbnail"
                        dangerouslySetInnerHTML={{ __html: svgContent }}
                        onClick={() => {
                            const parser = new DOMParser();
                            const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
                            const svgElement = svgDoc.querySelector("svg");
                            const cssContent = config.inputs.filter((el) => el.css).map((el) => {
                                return `${el.property}: ${svgElement.style[el.property] || el.defaultValue};`;
                            }).join("\n");

                            document.getElementById("css-output").textContent = cssContent;

                            // Set input values to match the clicked SVG's properties
                            Object.keys(inputValues).forEach(key => {
                                const value = svgElement.style[key];
                                const inputElement = document.querySelector(`input[data-property="${key}"]`);
                                if (inputElement) {
                                    inputElement.value = value;
                                    inputElement.dispatchEvent(new Event('input', { bubbles: true }));
                                }
                            });

                            // Update the Editor SVG
                            svgRef.current.innerHTML = svgContent;
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
