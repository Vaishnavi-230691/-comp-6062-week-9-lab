console.log("Working on Vue.js!");
const app = Vue.createApp({
    data() {
        return {
            greeting: 'Welcome to Vue.js!!:)',
            message: 'This message is displayed based on boolean property.',
            showMessage: true // if set to false the p tag will be hidden!
        };
    }
});

app.mount('#app');