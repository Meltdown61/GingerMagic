new Vue({
el:'#vue-app',
data:{
    
    name:'Dave Fitz',
    job: 'Web Dev',
    Website: 'http://www.jumbletown.ie',
    Google: '<a href="https://www.google.ie" target="_blank">Google</a>',
    age:52

},
methods:{

    greet: function(){

        return 'Good Morning ' + this.job;
    },

    up: function(){

        console.log("key is up")

    }   

},
computed: {



}
    
    
})

// new Vue({
//     el:'#vue-app2',
//     data:{
//         company_name:'My Company Name',
//         status:'Status',
//         staff: 'Staff Name',
//         client:'Client Name',
//         Website: 'http://www.jumbletown.ie',
//         Google: '<a href="https://www.google.ie" target="_blank">Google</a>'
    
//     },
//     methods:{
    
//         greet: function(){
    
//             return 'Good Morning ' + this.job;
//         }
    
//     }
    
        
//     })