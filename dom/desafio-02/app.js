new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('Voce apertou o botao')
        },
        armazenaValor(event){
            this.valor = event.target.value
        }
    }
})