const networkUri = 'https://localhost:7174/PwaTesting/NetworkInformation';

document.getElementById('networkInformation').addEventListener('submit', function (event) {
    event.preventDefault();
    
    if (navigator.connection) {
        let effectiveType = navigator.connection.effectiveType;
        let type = navigator.connection.type;
        let downlink = navigator.connection.downlink;
        let downlinkMax = navigator.connection.downlinkMax;

        var networkInfo = new NetworkInformation(effectiveType, type, downlink, downlinkMax);

        sendNetworkInformation(networkInfo);
    } else {
        console.error("Network information is not supported");
    }
});

async function sendNetworkInformation(networkInformation) {
    
    try {
        const response = await fetch(networkUri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(networkInformation)
        });

        console.log("Passou do fetch");

        if (response.ok) {
            console.log("Passou do response.ok");
            const result = await response.text();
            console.log('Network information sent successfully:', result);
        }
        else {
            console.error('Failed to send network information:', response.statusText);
        }
    } 
    catch (error) {
        console.error('Error sending network information:', error);
    }
}

class NetworkInformation {
    constructor(networkEffectiveType, networkType, downlink, downlinkMax) {
        this.networkEffectiveType = networkEffectiveType;
        this.networkType = networkType;
        this.downlink = downlink;
        this.downlinkMax = downlinkMax;
    }
}