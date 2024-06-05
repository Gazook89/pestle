import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Editor from '@components/SVGEditor';
import Sidebar from '@components/Sidebar';
import { SvgProvider, useSvg } from '@components/SvgContext';
import { useState, useEffect } from 'react';

import classTableConfig from '../config/classTable.js';
import noteFrameConfig from '../config/noteFrame.js';

const svgConfigs = {
	classTable: classTableConfig,
	noteFrame: noteFrameConfig,
};

export default function Home() {
	const [svgImage, setSvgImage] = useState('classTable');
	const [config, setConfig] = useState(svgConfigs['classTable']);

	const handleSvgSelect = (evt) => {
		const selectedSvg = evt.target.value;
		setSvgImage(selectedSvg);
		setConfig(svgConfigs[selectedSvg]);
	};

	return (
		<SvgProvider initialConfig={config}>
			<div className="container">
				<Head>
					<title>Pestle</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<main>
					<Header title="Pestle" />

					<select onChange={handleSvgSelect}>
						<option value='classTable'>Class Table</option>
						<option value='noteFrame'>Note</option>
					</select>

					<div className="layout">
						<Editor svgImage={svgImage} />
						<Sidebar />
					</div>
				</main>

				<Footer />
			</div>
		</SvgProvider>
	);
}
