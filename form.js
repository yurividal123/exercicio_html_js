    const form = document.querySelector(".container")
    const valorA = document.getElementById('numero-a');
    const valorB = document.getElementById('numero-b');
    function valorAB(valorA,valorB) {

        if (valorB > valorA){
            alert('Valor Valido')
        }

        else {
            alert('Valor Invalido')
        }


    }

    form.addEventListener('submit' , function(e) {
        e.preventDefault();
        valorAB(valorA.value,valorB.value)
    })