const cover = document.getElementById('cover');
const book = document.getElementById('book');
const pages = document.querySelectorAll('.page');

let currentPage = 0;

cover.addEventListener('click', () => {
    cover.style.transform = 'rotateY(-120deg)';

    setTimeout(() => {
        cover.style.display = 'none';
        book.classList.remove('hidden');
    }, 800);
});

function showPage(index) {
    pages.forEach(page => page.classList.remove('active'));
    pages[index].classList.add('active');
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

function closeBook() {
    book.classList.add('hidden');
    document.getElementById('ending').classList.remove('hidden');
}

const hearts = document.getElementById('hearts');

setInterval(() => {
    const heart = document.createElement('div');

    heart.className = 'heart';
    heart.innerHTML = '💚';

    heart.style.left = Math.random() * 100 + 'vw';

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}, 500);