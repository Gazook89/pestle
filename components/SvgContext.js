import { createContext, useContext, useState } from 'react';

// Create a context
export const SvgContext = createContext();

// Create a provider component
export const SvgProvider = ({ children, initialConfig }) => {
	const [svgContent, setSvgContent] = useState(null);
	const [config, setConfig] = useState(initialConfig);

	return (
		<SvgContext.Provider value={{ svgContent, setSvgContent, config, setConfig }}>
			{children}
		</SvgContext.Provider>
	);
};

// Create a custom hook to use the SVG context
export const useSvg = () => useContext(SvgContext);
