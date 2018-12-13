new Vue
({
   el:"#demo",
   data:
   {
      intro:"hello",
      link:'https://www.google.com',
      complete_tag:'<a href="https://www.google.com">link2</a>',
      count:0,
      textColor:'red',
      textSize:40+'px',
      styleObject:
      {
         color:'blue',
         fontSize: 40+'px'
      },
      avilable:false,
      changeBox:true,
      show:6,
      fruitBasket:['apple','mango','banana'],
      fruitMarket:
      [
         {name:'apple', amount:4},
         {name:'mango', amount:5},
         {name:'banana', amount:2}
      ]
   },
   methods: 
   {
      entry:function()
      {
         this.intro="Hii";
         return 'Welcome to Maropost!';
      },

      increment:function(value)
      {
         this.count+=value;
      }
   }
})