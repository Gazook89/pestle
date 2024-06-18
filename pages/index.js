import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Editor from '@components/SVGEditor';
import Sidebar from '@components/Sidebar';
import { SvgProvider, SvgContext } from '@components/SvgContext';
import { useState, useContext } from 'react';

import classTableConfig from '../config/classTable.js';
import noteFrameConfig from '../config/noteFrame.js';
import classTableDecorationConfig from '../config/classTableDecoration.js';
import phbFooterConfig from '../config/phbFooter.js';
import monsterFrameConfig from '../config/monsterFrame.js';

const svgConfigs = {
	monsterFrame: monsterFrameConfig,
	classTable: classTableConfig,
	noteFrame: noteFrameConfig,
	classTableDecoration: classTableDecorationConfig,
	phbFooter: phbFooterConfig,
};

const HomeContent = () => {
	const [svgImage, setSvgImage] = useState('monsterFrame');
	const { setConfig } = useContext(SvgContext);

	const handleSvgSelect = (evt) => {
		const selectedSvg = evt.target.value;
		setSvgImage(selectedSvg);
		setConfig(svgConfigs[selectedSvg]);
	};

	return (
		<div className="container">
			<Head>
				<title>Pestle</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>


				

				<div className="layout">
					<Editor svgImage={svgImage} />
					<Sidebar>
						<Header title="Pestle">
							<select onChange={handleSvgSelect}>
								<option value='monsterFrame'>Monster</option>
								<option value='classTable'>Class Table</option>
								<option value='noteFrame'>Note</option>
								<option value='classTableDecoration'>Class Decoration</option>
								<option value='phbFooter'>Footer</option>
							</select>
						</Header>
					</Sidebar>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default function Home() {
	return (
		<SvgProvider initialConfig={svgConfigs['monsterFrame']}>
			<HomeContent />
		</SvgProvider>
	);
}
