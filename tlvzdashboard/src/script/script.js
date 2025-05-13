const statusBot = "online";
const statusSpan = document.querySelector(".card-body .status");

statusSpan.textContent = statusBot === "online" ? "Online" : "Offline";
statusSpan.classList.remove("online", "offline");
statusSpan.classList.add(statusBot);

// Adiciona o botão de toggle do menu em dispositivos móveis
function createMenuToggle() {
    const button = document.createElement('button');
    button.className = 'menu-toggle';
    button.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active');
    });
}

// Atualiza o status do bot periodicamente
function updateBotStatus() {
    const statusElement = document.querySelector('.status');
    
    // Simula uma verificação de status (substitua por uma chamada real à API)
    const isOnline = Math.random() > 0.1; // 90% de chance de estar online
    
    statusElement.className = `status ${isOnline ? 'online' : 'offline'}`;
    statusElement.textContent = isOnline ? 'Online' : 'Offline';
}

// Inicializa as funcionalidades
document.addEventListener('DOMContentLoaded', () => {
    createMenuToggle();
    
    // Atualiza o status a cada 30 segundos
    updateBotStatus();
    setInterval(updateBotStatus, 30000);
    
    // Fecha o menu ao clicar em um link (mobile)
    document.querySelectorAll('.menu-opcoes a').forEach(link => {
        link.addEventListener('click', () => {
            const menu = document.querySelector('.menu');
            if (window.innerWidth <= 768) {
                menu.classList.remove('active');
            }
        });
    });
});

