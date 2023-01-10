console.log('vue ok', Vue);

const app = Vue.createApp({
    data(){
        return {
            firstName: 'Davide',
            lastName: 'Cardelli'
        }
    }
})

app.mount('#root')