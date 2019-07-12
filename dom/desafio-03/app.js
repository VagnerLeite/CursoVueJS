new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado(){
            return this.valor == 37 ? 'Valor Igual' : 'Valor Diferente de 37'
        }
    },
    watch:{
        resultado(novo, antigo){
            console.log(novo, antigo);
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    },
    methods: {
        aumentar() {
            this.contador++
        },
        diminuir() {
            this.contador--
        }
    }
});