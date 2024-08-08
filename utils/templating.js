// utils/templating.js
async function loadTemplate(page, title) {
    const response = await fetch('templates/template.html');
    let template = await response.text();

    const contentResponse = await fetch(page);
    const content = await contentResponse.text();

    // Replace the title placeholder with the actual title
    template = template.replace('{{title}}', title);

    // Replace the content placeholder with the actual content
    template = template.replace('{{content}}', content);

    // Update the document's title
    document.title = title;

    // Update the document's content
    document.documentElement.innerHTML = template;
}

// Example usage
document.addEventListener('DOMContentLoaded', async () => {
    const page = window.location.pathname.split('/').pop();

    // Fetch the content of the page to extract the title
    const contentResponse = await fetch(page);
    const content = await contentResponse.text();

    // Extract the title from the content using a regular expression
    const titleMatch = content.match(/{{title => (.*?)}}/);
    const title = titleMatch ? titleMatch[1] : 'Default Title';

    loadTemplate(page, title);
});