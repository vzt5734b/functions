const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const isTabInView = () => !document.hidden;