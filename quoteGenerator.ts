const quotes: string[] = [
    "Believe in yourself!",
    "Stay positive and work hard.",
    "Consistency is key to success.",
    "Never give up on your dreams.",
]

function getRandomQuote(): string {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
console.log(getRandomQuote());
