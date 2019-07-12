new Vue({
    el: '#desafio',
    data: {
        nome: 'Vagner Alves Leite',
        idade: 34,
        link: 'goku.jpg',
    },
    methods: {
        idadeMultiplicada: function () {
            return parseFloat(this.idade) * 3
        },

        randomNumber: function () {
            return Math.random()
        },

        alterarNome(event) {
            this.nome = event.target.value
        }
    }
})