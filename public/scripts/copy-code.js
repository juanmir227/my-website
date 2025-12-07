document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre > code").forEach((codeBlock) => {
    const wrapper = document.createElement("div");
    wrapper.className = "code-wrapper";

    const pre = codeBlock.parentNode;
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    const button = document.createElement("button");
    button.className = "copy-btn";
    button.textContent = "Copiar";

    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(codeBlock.innerText);
        button.textContent = "Copiado ✔";
        button.classList.add("copied");
        setTimeout(() => {
          button.textContent = "Copiar";
          button.classList.remove("copied");
        }, 1500);
      } catch (err) {
        console.error("Error al copiar", err);
      }
    });

    wrapper.appendChild(button);
  });
});
