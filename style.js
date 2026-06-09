document.addEventListener('DOMContentLoaded', () => {
    const browserInfo = navigator.userAgent;
    const platformInfo = navigator.platform; 

    localStorage.setItem('browser', browserInfo);
    localStorage.setItem('platform', platformInfo);

    const footer = document.getElementById('site-footer');
    if (footer) {
        const savedBrowser = localStorage.getItem('browser');
        const savedPlatform = localStorage.getItem('platform');
        
        footer.innerHTML += `
            <div class="system-info" style="font-size: 12px; margin-top: 10px; opacity: 0.8;">
                <p><strong>Ваша ОС:</strong> ${savedPlatform}</p>
                <p><strong>Ваш браузер:</strong> ${savedBrowser}</p>
            </div>
        `;
    }

    const myVariant = 13; 
    const commentsContainer = document.getElementById('comments-container'); 

    if (commentsContainer) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${myVariant}/comments`)
            .then(response => {
                if (!response.ok) throw new Error('Помилка завантаження даних');
                return response.json();
            })
            .then(comments => {
                comments.forEach(comment => {
                    const card = document.createElement('div');
                    card.className = 'comment-card';
                    card.innerHTML = `
                        <h4>${comment.name} <small>(${comment.email})</small></h4>
                        <p>${comment.body}</p>
                    `;
                    commentsContainer.appendChild(card);
                });
            })
            .catch(error => console.error('Error fetching comments:', error));
    }
});

setTimeout(() => {
    const modal = document.createElement('div');
    modal.id = 'feedback-modal';
    modal.className = 'modal-overlay';
    
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Зворотній зв'язок</h3>
            <form action="https://formspree.io/f/mnjyzaow" method="POST">
                <input type="text" name="name" placeholder="Ім'я" required><br>
                <input type="email" name="email" placeholder="Email" required><br>
                <input type="tel" name="phone" placeholder="Номер телефону" required><br>
                <textarea name="message" placeholder="Ваше повідомлення" required></textarea><br>
                <button type="submit">Відправити</button>
                <button type="button" id="close-modal-btn">Закрити</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('close-modal-btn').addEventListener('click', () => {
        modal.remove();
    });
}, 60000);

const themeToggleBtn = document.getElementById('theme-toggle');

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('selected-theme', theme);
}
const currentHour = new Date().getHours();
let defaultTheme = (currentHour >= 7 && currentHour < 21) ? 'light' : 'dark';

const savedTheme = localStorage.getItem('selected-theme') || defaultTheme;
applyTheme(savedTheme);

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-mode');
        applyTheme(isDark ? 'light' : 'dark');
    });
}
