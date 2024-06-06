import React, { createContext, useState } from "react";

const SvgContext = createContext();

const SvgProvider = ({ children, initialConfig }) => {
	const [config, setConfig] = useState(initialConfig);

	return (
		<SvgContext.Provider value={{ config, setConfig }}>
			{children}
		</SvgContext.Provider>
	);
};

export { SvgContext, SvgProvider };
