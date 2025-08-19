import React, { createContext, useState, useRef, useEffect } from "react";

const SvgContext = createContext();

const SvgProvider = ({ children, initialConfig }) => {
	const [config, setConfig] = useState(initialConfig);
	const svgRef = useRef(null);
	

	useEffect(() => {
		setConfig(initialConfig);
	}, [initialConfig]);

	return (
		<SvgContext.Provider value={{ config, setConfig, svgRef }}>
			{children}
		</SvgContext.Provider>
	);
};

export { SvgContext, SvgProvider };
