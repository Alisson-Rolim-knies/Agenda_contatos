// Este evento é acionado quando o conteúdo do DOM (Document Object Model) é completamente carregado e analisado
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona o formulário pelo seu ID
    const formularioContato = document.getElementById("contectform");
    // Seleciona o corpo da tabela onde os contatos serão adicionados
    const corpoTabelaContatos = document.querySelector("#contactsTable tbody");

    // Adiciona um ouvinte de evento ao formulário para interceptar o evento de submissão (submit)
    formularioContato.addEventListener("submit", (evento) => {
        // Evita o envio padrão do formulário, que recarregaria a página
        evento.preventDefault();

        // Obtém os valores dos campos de entrada (input) de nome e telefone
        const nome = document.getElementById("nome").value;
        const telefone = document.getElementById("telefone").value;

        // Verifica se ambos os campos estão preenchidos
        if (nome && telefone) {
            // Insere uma nova linha (tr) no corpo da tabela
            const novaLinha = corpoTabelaContatos.insertRow();

            // Insere uma nova célula (td) na nova linha para o nome
            const celulaNome = novaLinha.insertCell(0);
            // Define o conteúdo de texto da célula como o valor do nome
            celulaNome.textContent = nome;

            // Insere uma nova célula (td) na nova linha para o telefone
            const celulaTelefone = novaLinha.insertCell(1);
            // Define o conteúdo de texto da célula como o valor do telefone
            celulaTelefone.textContent = telefone;

            // Limpa os campos do formulário para que possam ser reutilizados
            formularioContato.reset();
        }
    });
});
