document.addEventListener('DOMContentLoaded', function () {
    // Fetch dos dados do arquivo JSON
    fetch('servicos.json')
        .then(response => response.json())
        .then(data => {
            const servicosLista = document.getElementById('servicos-lista');

            // Iterar sobre os serviços e criar elementos HTML para exibição
            data.servicos.forEach(servico => {
                const servicoElement = document.createElement('div');
                servicoElement.classList.add('servico');

                servicoElement.innerHTML = `
                    <h5>${servico.nome}</h5>
                    <p><strong>Descrição:</strong> ${servico.descricao}</p>
                    <p><strong>Tempo Médio:</strong> ${servico.tempo_medio}</p>
                    <p><strong>Valor:</strong> R$ ${servico.valor.toFixed(2)}</p>
                    <hr>
                `;

                servicosLista.appendChild(servicoElement);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os serviços:', error);
        });
});
