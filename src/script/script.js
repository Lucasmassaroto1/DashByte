/* 
    Bloco que atualiza o status do bot no card
*/
const statusBot = "online";
const statusSpan = document.querySelector(".card-body .status");

statusSpan.textContent = statusBot === "online" ? "Online" : "Offline";
statusSpan.classList.remove("online", "offline");
statusSpan.classList.add(statusBot);

/* 
    Bloco que atualiza o prefixo do bot no card
    mantendo o prefixo original
*/
document.addEventListener("DOMContentLoaded", () =>{
    const input = document.querySelector(".input-prefix");
    const prefixOriginal = document.querySelector(".status-prefix.online");
    const prefixCustomizado = document.querySelector(".status-prefix.offline");

    input.addEventListener("keydown", (event) =>{
        if (event.key === "Enter" && input.value.trim() !== ""){
            const novoPrefixo = input.value.trim();
            prefixCustomizado.textContent = novoPrefixo;
            prefixOriginal.classList.remove("online");
            prefixOriginal.classList.add("offline");
            prefixCustomizado.classList.remove("offline");
            prefixCustomizado.classList.add("online");
            input.value = "";
        }
    });
});
/* 
    CODIGO FUNCIONANDO
const inputPrefix = document.getElementById('input-prefix');
const originalPrefix = document.getElementById('original-prefix');
const customPrefix = document.getElementById('custom-prefix');

inputPrefix.addEventListener('input', () =>{
    const newPrefix = inputPrefix.value.trim();

    if (newPrefix !== ""){
        customPrefix.textContent = newPrefix;
        originalPrefix.classList.remove('online');
        originalPrefix.classList.add('offline');
        customPrefix.classList.remove('offline');
        customPrefix.classList.add('online');
    } else{
        customPrefix.textContent = "-";
        originalPrefix.classList.remove('offline');
        originalPrefix.classList.add('online');
        customPrefix.classList.remove('online');
        customPrefix.classList.add('offline');
    }
}); */