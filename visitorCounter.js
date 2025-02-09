document.addEventListener('DOMContentLoaded', (event) => {
    async function incrementVisitorCount() {
        try {
            let response = await fetch('https://y0218osvh0.execute-api.eu-central-1.amazonaws.com/prod/', 
                { method: 'POST' });
            if (!response.ok) throw new Error('Network response was not ok');
            console.log('Visitor count incremented');
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    async function getVisitorCount() {
        try {
            let response = await fetch('https://y0218osvh0.execute-api.eu-central-1.amazonaws.com/prod/',
                { method: 'GET' });
            if (!response.ok) throw new Error('Network response was not ok');
            let data = await response.json();
            document.getElementById('visitor-count').innerText = data.visitor_count;
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    incrementVisitorCount();
    //getVisitorCount();
});
