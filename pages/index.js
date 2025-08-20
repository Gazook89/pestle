import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Preview from '@components/Preview.jsx';
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
    const [svgImage, setSvgImage] = useState('classTable');
    const { setConfig } = useContext(SvgContext);
    const [selectedSvg, setSelectedSvg] = useState('classTable');
    const [svgThumbnails, setSvgThumbnails] = useState([]);

    const handleSvgChange = (evt) => {
        setSelectedSvg(evt.target.value);
    };

    const handleSvgSelect = (evt) => {
        evt.preventDefault();
        setSvgImage(selectedSvg);
        setConfig(svgConfigs[selectedSvg]);
        addSvgThumbnail(svgConfigs[selectedSvg].svg); // Add the selected SVG to thumbnails
    };

    const addSvgThumbnail = (svgContent) => {
        setSvgThumbnails((prevThumbnails) => [...prevThumbnails, svgContent]);
    };

    return (
        <div className="container">
            <Head>
                <title>Pestle</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="layout">
                    <Preview svgImage={svgImage} />
                    <Sidebar svgThumbnails={svgThumbnails}>
                        <Header title="Pestle">
                            <form onSubmit={handleSvgSelect}>
                                <select value={selectedSvg} onChange={handleSvgChange}>
                                    <option value='monsterFrame'>Monster</option>
                                    <option value='classTable'>Class Table</option>
                                    <option value='noteFrame'>Note</option>
                                    <option value='classTableDecoration'>Class Decoration</option>
                                    <option value='phbFooter'>Footer</option>
                                </select>
                                <button type="submit">Create</button>
                            </form>
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
        <SvgProvider initialConfig={svgConfigs['classTable']}>
            <HomeContent />
        </SvgProvider>
    );
}
