function adicionarTarefa() {
    const tarefa = document.getElementById("tarefa")
    const diasSemana = document.getElementById("dias-semana")

        if (diasSemana.value === "domingo") {
            const domingo = document.getElementById("domingo")
            domingo.innerHTML += `<li>${tarefa.value}</li>`
            tarefa.value = ""
        }
        if (diasSemana.value === "segunda") {
            const segunda = document.getElementById("segunda")
            segunda.innerHTML += `<li>${tarefa.value}</li>`
            tarefa.value = ""
        }
        if (diasSemana.value === "terca") {
            const terca = document.getElementById("terca")
            terca.innerHTML += `<li>${tarefa.value}</li>`
            tarefa.value = ""
        }
        if (diasSemana.value === "quarta") {
            const quarta = document.getElementById("quarta")
            quarta.innerHTML += `<li>${tarefa.value}</li>`
            tarefa.value = ""
        }
        if (diasSemana.value === "quinta") {
            const quinta = document.getElementById("quinta")
            quinta.innerHTML += `<li>${tarefa.value}</li>`
            tarefa.value = ""
        }
        if (diasSemana.value === "sexta") {
            const sexta = document.getElementById("sexta")
            sexta.innerHTML += `<li>${tarefa.value}</li>`
            tarefa.value = ""
        }
        if (diasSemana.value === "sabado") {
            const sabado = document.getElementById("sabado")
            sabado.innerHTML += `<li>${tarefa.value}</li>`
            tarefa.value = ""
        }    
}