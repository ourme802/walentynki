function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Losowe położenie w poziomie
    heart.style.left = Math.random() * 100 + 'vw';
    // Losowa opóźnienie animacji
    heart.style.animationDuration = Math.random() * 2 + 5 + 's'; // Od 3 do 5 sekund
    
    // Dodajemy serduszko do kontenera
    document.querySelector('.container').appendChild(heart);
    
    heart.style.animationName = 'fall';
    // Usunięcie serduszka po zakończeniu animacji
    setTimeout(() => {
        heart.remove();
    }, heart.style.animationDuration.slice(0, -1) * 1000); // Konwertuje czas trwania z "s" na milisekundy
}

// Generuj serduszko co 150 ms
setInterval(createHeart, 50);


document.getElementById('btnTak').addEventListener('click', function() {
    alert('Hurra! 💖');
    document.getElementById('pytanie').style.display = 'none'; // Ukryj pytanie po kliknięciu
});

document.getElementById('btnNie').addEventListener('click', function() {
    alert('Może następnym razem... 😢');
    document.querySelector('.container').appendChild(heart); // Ukryj pytanie po kliknięciu
});


