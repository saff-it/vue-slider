
const app = new Vue (
    {
        el:'#app',

        data: {  

            index : 0,
            clock: null,

            slides : [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ]        
            
        },

        methods: {
            nextSlide: function() {
                this.index = this.index + 1;
                if (this.index === this.slides.length){
                    this.index = 0;
                }    
                
            },

            prevSlide: function() {
                this.index = this.index - 1;
                if (this.index === - 1){
                    this.index = this.slides.length - 1;
                }
                          
            },

            setCurrent: function(value){
                this.index = value;
            },

            setActive: function(value){
              if (this.index == value){
                return 'active';

              }
            },

            startInterval: function(){
              clock = setInterval(this.nextSlide, 1000);

            },

            stopInterval: function(){
                clearInterval(this.clock);

            },

            
        },

        // created () {
        //     setInterval(this.nextSlide, 3000);
        // },


    },

);