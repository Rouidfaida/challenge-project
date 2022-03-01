import React from 'react';

const Footer = () => {
return (
    <div className="Container" style={{position:"fixed"}}>
		<div className="copyRight">
			<img src="/facebook.png" alt="facebook"/>
			<img src="/instagram.png" alt="instagram"/>
			<img src="/linkedin-logo.png" alt="linkedin-logo"/>
			<img src="/twitter.png" alt="twitter"/>
            © 2022 STB Powered by PixelsTrade
        </div>
    </div>
    );
}

export default Footer;