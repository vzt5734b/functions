const merge = [...new Set([...a, ...b])];
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const fullName = name || 'buddy';