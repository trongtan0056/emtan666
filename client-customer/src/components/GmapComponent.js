import React, { Component } from 'react';

class Gmap extends Component {
    render() {
        return (
            <div className="align-center">
                <h2 className="text-center">MY LOCATION</h2>
                <iframe 
                    title="gmap" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.651268638111!2d106.68380727451783!3d10.837977058056437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529b4f88afc83%3A0xf8db638f3c0383be!2zNDk2LzYzIEQuIFF14bqjbmcgSMOgbSwgUGjGsOG7nW5nIDYsIEfDsiBW4bqlcCwgSOG7kyBDaMOtIE1pbmggNzAwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1721670553903!5m2!1svi!2s" 
                    width="800" 
                    height="600" 
                    style={{ border: 0 }} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        );
    }
}

export default Gmap;
