import React, { createContext, useState, useRef, useEffect } from "react";

const SvgContext = createContext();

const SvgProvider = ({ children, initialConfig }) => {
	const [config, setConfig] = useState(initialConfig);
	const [cssOutput, setCssOutput] = useState({});
	const svgRef = useRef(null);
	

	useEffect(() => {
		setConfig(initialConfig);
	}, [initialConfig]);

	return (
		<SvgContext.Provider value={{ config, setConfig, svgRef, cssOutput, setCssOutput }}>
			{children}
		</SvgContext.Provider>
	);
};

export { SvgContext, SvgProvider };
