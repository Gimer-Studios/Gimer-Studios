// static/js/plugins.js
document.addEventListener('DOMContentLoaded', function () {
    // Wait 0.25 seconds
    setTimeout(() => {
        const pluginList = document.getElementById('plugin-list');

        // Load from JSON file
        fetch('./static/json/plugins.json')
            .then(response => response.json())
            .then(plugins => {
                plugins.forEach(plugin => {
                    const pluginDiv = document.createElement('div');
                    pluginDiv.classList.add('plugin', 'mb-8');

                    pluginDiv.innerHTML = `
                        <div class="bg-gray-300 p-4 rounded-lg">
                            <h3 class="text-xl font-semibold">${plugin.name}</h3>
                            <p>Description: ${plugin.description}</p>
                            <p class="text-gray-600 font-light">Version: ${plugin.version}</p>
                            <p class="text-gray-600 font-light">Download: <a href="${plugin.download}" class="text-blue-500 hover:underline">${plugin.name}</a></p>
                        </div>
                    `;

                    pluginList.appendChild(pluginDiv);
                });
            })
            .catch(error => console.error('Error loading plugins:', error));
    }, 250);
});