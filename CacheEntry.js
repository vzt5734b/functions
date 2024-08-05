const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const merge = (a, b) => [...a, ...b];
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);