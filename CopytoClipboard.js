const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const toggleBool = () => (bool = !bool);