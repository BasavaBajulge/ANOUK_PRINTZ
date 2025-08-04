import React from 'react';
import './WhatWeDo.css';

const WhatWeDo = () => {
    return (
        <section id="what-we-do-section" className="whatwedo-container">
            <h2 className="title">WHAT WE OFFER</h2>
            <div className="offer-grid">
                <div className="offer-card">
                    <h3>BARCODE LABEL DESIGN</h3>
                    <ul>
                        <li>Barcode generation (EAN, QR)</li>
                        <li>Customized label size, layout, and material</li>
                        <li>Design services that align with your brand guidelines</li>
                    </ul>
                </div>
                <div className="offer-card">
                    <h3>DIGITAL PRINTING</h3>
                    <ul>
                        <li>We use Xerox Prime Link B9100 for high-quality digital printing</li>
                        <li>Supports customization and variable data printing like QR codes, prices, and serial numbers</li>
                    </ul>
                </div>
                <div className="offer-card">
                    <h3>OFFSET PRINTING</h3>
                    <ul>
                        <li>High-volume printing with consistent colour quality and professional finish</li>
                        <li>Use of Komori machines for precision, durability, and reliability</li>
                    </ul>
                </div>
                <div className="offer-card">
                    <h3>TECHNOLOGY</h3>
                    <ul>
                        <li>Use of advanced software like BarTender, Adobe, and Excel</li>
                        <li>Automated systems ensure error-free barcode generation</li>
                    </ul>
                </div>
            </div>
            <div className="website-link">
                <a href="https://www.anoukprintz.com" target="_blank" rel="noreferrer">www.anoukprintz.com</a>
            </div>
        </section>
    );
};

export default WhatWeDo;
