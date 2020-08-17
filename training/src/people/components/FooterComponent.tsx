import React from 'react';

export default function FooterComponent() {
    const obenText = "oben links..."
    const footerText = "Javacream"
    const untenText = "unten rechts... "
    const actualTime = new Date()
    return  (
        <div id="footer">
            <p className="left">{obenText}</p>            
            <p className="center"> {actualTime.toLocaleString()}</p>            
            <p className="right">{footerText}</p>
        </div>
      )

}

