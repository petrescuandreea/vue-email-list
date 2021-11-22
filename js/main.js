/*

TRACCIA: Attraverso l’apposita API di Boolean generare 10 indirizzi email
e stamparli in pagina all’interno di una lista untilizzando Vue

*/

// collego l'elemento html in Vue 
// creo proprietà per singola mail 
// creo un array vuoto che sarà popolato con axios 
// genero le 10 mail e le pusho nell'array 


// creata istanza Vue 
var app = new Vue({
    el: '#app',
    data: {
        // creata proprietà per l'email 
        email:'',

        // creato array che sarà popolato con axios 
        emailList: [],
    },
    
    // usato axios per far sì che al caricamento della pagina parta la chiamata Ajax
    mounted() {
        // creata variabile per salvare il this di Vue 
        const self = this;

        // creato ciclo for pre generare le 10 mail 
        for(let i = 0; i < 10; i++) {
            // chiamata Ajax 
            axios
            // richiamato l'endpoint 
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(emailGenerated) {
                // console.log(emailGenerated.data.response);
                self.email = emailGenerated.data.response;
                // popolato array 
                self.emailList.push(self.email);
            });
            // console.log(self.email);
        }
    }

});