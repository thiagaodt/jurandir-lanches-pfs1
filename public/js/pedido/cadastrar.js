document.getElementById('formCadastrarPedido').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = {
        nome: document.getElementById('nome').value,
        endereco: document.getElementById('endereco').value,
        pao_id: document.getElementById('pao_id').value,
        que_id: document.getElementById('que_id').value,
        ham_id: document.getElementById('ham_id').value,
        aco_id: document.getElementById('aco_id').value,
    };

    try {
        const response = await fetch('/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Pedido cadastrado com sucesso!');
        } else {
            const error = await response.json();
            alert(`Erro ao cadastrar pedido: ${error.message}`);
        }
    } catch (err) {
        console.error('Erro ao enviar o pedido:', err);
        alert('Ocorreu um erro ao cadastrar o pedido.');
    }
});