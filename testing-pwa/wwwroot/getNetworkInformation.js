document.getElementById('networkInformation').addEventListener('submit', function (event) {
    let type = navigator.connection.type;

    var connectionType = type.ToString();

    if (connectionType != null) {
        sendNetworkInformation(connectionType);
    }
    else {
        console.error("Network information is empty");
    }
});

async function sendNetworkInformation(conectionInfoString) {
    
    try {
        const response = await fetch(uri, {
            method: 'GET',
            body: conectionInfoString
        })

        console.log("Passou do fetch");

        if (response.ok) {
            console.log("Passou do response.ok");
            const result = await response.json();
            console.log('Network information sent successfully:', connectionInfoString);
        }
        else {
            console.error('Failed to send network information:', response.statusText);
        }
    } 
    catch (error) {
        console.error('Error sending network information:', error);
    }
}