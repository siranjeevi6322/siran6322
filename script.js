document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#f8d7da', '#d4edda', '#cce5ff', '#fff3cd', '#fefefe'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
