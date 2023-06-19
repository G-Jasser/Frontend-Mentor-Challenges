const app = Vue.createApp({
    
    data()  {
        return  {
            inputDay:'',
            inputMonth:'',
            inputYear:'',

            resultYear: '--',
            resultMonth: '--',
            resultDay:'--',

            fieldEmptyDay: false,
            fieldEmptyMonth: false,
            fieldEmptyYear: false,
            invalidDay: false,
            invalidMonth: false,
            invalidYear: false,
            invalidDate: false
        }
    },
    methods: {
        calculateAge(){
            const currentYear = 2023
            const currentMonth = 12
            const currentDay = 31
            const validDays=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

            this.resultDay = '--'
            this.resultMonth = '--'
            this.resultYear = '--'

            if(this.inputDay == '')
                this.fieldEmptyDay = true
            else
                this.fieldEmptyDay = false

            if(this.inputMonth == '')
                this.fieldEmptyMonth = true
            else
                this.fieldEmptyMonth = false
                
            if(this.inputYear == '')
                this.fieldEmptyYear = true
            else
                this.fieldEmptyYear = false

            if(this.fieldEmptyDay || this.fieldEmptyMonth || this.fieldEmptyYear)
                return


            if(this.inputYear > 2023)
                this.invalidYear = true
            else
                this.invalidYear = false

            if(this.inputMonth < 1 || this.inputMonth > 12)
                this.invalidMonth = true
            else
                this.invalidMonth = false

            if(this.inputDay < 1 || this.inputDay > 31)
                this.invalidDay = true
            else
                this.invalidDay = false

            if(this.invalidDay || this.invalidMonth || this.invalidYear)
                return
    

            if(this.inputDay > validDays[this.inputMonth-1])
                this.invalidDate = true
            else
                this.invalidDate = false

            if(this.invalidDate)
                return
            

            this.resultDay = currentDay - this.inputDay
            this.resultMonth = currentMonth - this.inputMonth
            this.resultYear = currentYear - this.inputYear
            return
        }
    }

}).mount('#app')