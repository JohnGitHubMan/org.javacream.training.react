import React from 'react';
export default function HeaderComponent() {
    const headerText = "So here´s to the P E O P L E"
    const htmlFragment = (
        <div id="header">
            <p>{headerText}</p>
        </div>
      )
    return htmlFragment 
}

