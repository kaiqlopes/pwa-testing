const networkUpdateUri = 'https://localhost:7174/PwaTesting/NetworkUpdate';

let effectiveType = navigator.connection.effectiveType;
let type = navigator.connection.type;

navigator.connection.addEventListener('change', updateConnectionStatus);

async function updateConnectionStatus() {
    let newEffectiveType = navigator.connection.effectiveType;
    let newType = navigator.connection.type;

    let networkUpdate = `Connection type changed from ${type}: ${effectiveType} to ${newType}: ${newEffectiveType}`;
    console.log(networkUpdate);

    try {
        const response = await fetch(networkUpdateUri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(networkUpdate)
        })
        
        console.log("Passou do fetch");

        if (response.ok) {
            console.log("Passou do response.ok");
            const result = await response.text();
            console.log('Network update sent successfully:', result);
        } else {
            console.error('Failed to send network update:', response.statusText);
        }

    } catch (error) {
        console.error('Error sending network update:', error);
    }

  type = navigator.connection.effectiveType;
}

