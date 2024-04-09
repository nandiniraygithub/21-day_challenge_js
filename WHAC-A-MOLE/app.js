document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const holes = document.querySelectorAll('.hole');
    const scoreDisplay = document.querySelector('.score span');
    let score = 0;
    const sound = new Audio("images/assets_smash.mp3");
    let timer; // Declare timer variable outside the function

    function run() {
        const randomIndex = Math.floor(Math.random() * holes.length);
        const randomHole = holes[randomIndex];

        const img = document.createElement('img');
        img.classList.add('mole');
        img.src = 'images/mole.png';

        img.addEventListener('click', () => {
            score += 10;
            sound.play();
            scoreDisplay.textContent = score;
            img.src = 'images/mole-whacked.png';
            clearTimeout(timer);
            setTimeout(() => {
                randomHole.removeChild(img);
                run();
            }, 500);
        });

        randomHole.appendChild(img);

        // Set a timeout to remove the mole after a certain time
        timer = setTimeout(() => {
            randomHole.removeChild(img);
            run();
        }, 3000); // Adjust the time as needed
    }

    setInterval(run, 2000); // Run the game loop every 2 seconds

    window.addEventListener('mousemove', e => {
        cursor.style.top = e.pageY + 'px';
        cursor.style.left = e.pageX + 'px';
    });

    window.addEventListener('mousedown', () => {
        cursor.classList.add('active');
    });

    window.addEventListener('mouseup', () => {
        cursor.classList.remove('active');
    });
});
