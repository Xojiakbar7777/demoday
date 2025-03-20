const app = Vue.createApp({
    data() {
        return {
            propertyValue: 10000,
            insuranceTerm: 1,
            insuranceRate: 0.01,
        };
    },
    computed: {
        totalCost() {
            return this.propertyValue * this.insuranceRate * this.insuranceTerm;
        }
    }
});
app.mount('#app');