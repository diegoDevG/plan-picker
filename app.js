let PlanComponent = {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            required: true
        },
        selectedPlan: {
            type: String
        }
    },
    computed: {
        isSelected(){
          return this.name === this.selectedPlan  
        }
    },
    methods: {
        select() {
            this.$emit('select', this.name)
        }
    }
}

let PlanPickerComponent = {
    template: '#plan-picker-component',
    components: {
        plan: PlanComponent
    },

    data () {
        return{
            plans: ['The single', 'The Curious', 'The Hacker', 'The Addict'],
            selectedPlan: null
        }
    },

    methods: {
        selectPlan (plan) {
            this.selectedPlan = plan
        } 
    }
}

new Vue({
    el: '#app',
    components: {
        PlanPicker: PlanPickerComponent
    }
})