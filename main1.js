// Initialize applicattion instance (like a class?)
var app = new Vue({
    el: '#app', // id name witch is connected to Vue.js
    data : {
        message: "Hello Vue.js!", // put string into message variable
        list: ['apple', 'banana', 'strawberry'], // list variable
        number: "-1",
        show: true,
        count: 0,
        radius: 50,
    },
    methods :{
        handleClick: function(event) {
            alert(event.target)
        },
        increment: function() {
            this.count += 1
        }
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        ok: false
    }
})
