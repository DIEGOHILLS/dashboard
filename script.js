document.getElementById("fetch-data").addEventListener("click", () => {
    // Mock data for the example
    const data = {
        facebook: { followers: 1200, engagement: 300 },
        twitter: { followers: 800, engagement: 200 },
        instagram: { followers: 1500, engagement: 500 }
    };

    let metrics = "";
    for (const platform in data) {
        metrics += `<h3>${platform.charAt(0).toUpperCase() + platform.slice(1)}:</h3>
                    <p>Followers: ${data[platform].followers}</p>
                    <p>Engagement: ${data[platform].engagement}</p>`;
    }
    
    document.getElementById("metrics").innerHTML = metrics;
});
