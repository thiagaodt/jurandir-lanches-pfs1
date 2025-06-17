document.addEventListener("DOMContentLoaded", function() {
    var listaBtns = document.querySelectorAll(".btnExcluir");

    for (var i = 0; i < listaBtns.length; i++) {
        listaBtns[i].addEventListener("click", excluirProduto);
    }
});

async function excluirProduto() {
    var codigo = this.dataset.codigo;
    if (confirm("Tem certeza que deseja excluir?")) {
        if (codigo != "") {
            var obj = {
                codigo: codigo
            };
            try {
                const response = await fetch(`/pedido/deletar/${codigo}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(obj),
                });

                if (response.ok) {
                    alert('Pedido deletado com sucesso!');
                    window.location.reload();
                } else {
                    const error = await response.json();
                    alert(`Erro ao deletar pedido: ${error.message}`);
                }
            } catch (err) {
                console.error('Erro ao enviar o pedido:', err);
                alert('Ocorreu um erro ao excluir o pedido.');
            }
        }
    }
}