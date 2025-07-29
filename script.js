document.getElementById('counter').addEventListener('click', function() {
    this.textContent = `Кликов: ${parseInt(this.textContent.split(':')[1] || 0) + 1}`;
});
