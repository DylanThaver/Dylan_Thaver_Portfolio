window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollPosition / documentHeight;

    // Colors
    const startColor = [39, 255, 237];
    const endColor = [255, 69, 0];
    const backgroundStart = [18, 18, 18];
    const backgroundEnd = [50, 0, 0];

    // Helper function to calculate new color
    const calculateColor = (start, end) =>
        start.map((value, index) =>
            Math.floor(value + (end[index] - value) * scrollPercentage)
        );

    // Apply new primary and background colors
    const [r, g, b] = calculateColor(startColor, endColor);
    const primaryColor = `rgb(${r}, ${g}, ${b})`;

    const [br, bg, bb] = calculateColor(backgroundStart, backgroundEnd);
    const backgroundColor = `rgb(${br}, ${bg}, ${bb})`;

    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--secondary-color', primaryColor);
    document.documentElement.style.setProperty('--background-color', backgroundColor);
});

// Trigger zoom-in effects on scroll
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        section.classList.toggle('in-view', sectionTop < triggerBottom);
    });
});
