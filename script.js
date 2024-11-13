document.addEventListener("DOMContentLoaded", () => {
    // Função para processar o formulário
    function submitForm() {
        // Captura os valores dos campos do formulário
        const nome = document.getElementById("nome").value;
        const idade = document.getElementById("idade").value;
        const email = document.getElementById("email").value;
        const endereco = document.getElementById("endereco").value;
        const cep = document.getElementById("cep").value;
        const tipoSanguineo = document.getElementById("tipoSanguineo").value;
        const peso = document.getElementById("peso").value;
        const motivo = document.getElementById("motivo").value;

        // Verifica se o nome é "Wallace Oliveira" e redireciona para a página secreta
        if (nome === "Wallace Oliveira") {
            window.location.href = "secreta.html";
            return; // Encerra a execução da função após o redirecionamento
        }

        // Chama as funções para gerar o PDF e enviar a simulação do e-mail
        gerarPDF(nome, idade, email, endereco, cep, tipoSanguineo, peso, motivo);
        sendEmail(nome, idade, email, endereco, cep, tipoSanguineo, peso, motivo);

        // Exibe uma mensagem de confirmação
        alert("Cadastro realizado com sucesso!");
    }

    // Função para gerar o PDF com os dados do formulário
    function gerarPDF(nome, idade, email, endereco, cep, tipoSanguineo, peso, motivo) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Definindo o layout da ficha
        doc.setFontSize(18);
        doc.text("Ficha de Inscrição - Campanha de Doação de Sangue", 20, 20);
        doc.setFontSize(20);
        doc.text("------------------------------------------------------------------", 20, 30);
        doc.setFontSize(12);
        doc.text(`Nome: ${nome}`, 20, 40);
        doc.text(`Idade: ${idade}`, 20, 50);
        doc.text(`Email: ${email}`, 20, 60);
        doc.text(`Endereço: ${endereco}`, 20, 70);
        doc.text(`CEP: ${cep}`, 20, 80);
        doc.text(`Tipo Sanguíneo: ${tipoSanguineo}`, 20, 90);
        doc.text(`Peso: ${peso} kg`, 20, 100);
        doc.text("Motivo da Doação:", 20, 110);
        doc.text(motivo, 20, 120, { maxWidth: 170 });
        doc.setFontSize(20);
        doc.text("------------------------------------------------------------------", 20, 130);

        // Salva o PDF com o nome do usuário
        doc.save(`Ficha_Inscricao_${nome}.pdf`);
    }

    // Função para simular o envio de e-mail
    function sendEmail(nome, idade, email, endereco, cep, tipoSanguineo, peso, motivo) {
        // Exibe uma mensagem simulando o envio de um e-mail
        alert(`Dados enviados para o e-mail: ${email}`);
    }

    // Adiciona o evento de clique ao botão de cadastro
    document.querySelector("button[type='button']").addEventListener("click", submitForm);

    
});