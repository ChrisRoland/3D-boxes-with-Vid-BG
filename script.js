const btn = document.getElementById('btn');
const boxes = document.getElementById('boxes');

const createBoxes = () => {
    for (let a = 0; a < 4; a++) {
        for (let b = 0; b < 4; b++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundPosition = `${-b * 125}px ${-a * 125}px`;
            boxes.appendChild(box);
        }
    }
};

createBoxes();

btn.addEventListener('click', () => {
    boxes.classList.toggle('break');
});