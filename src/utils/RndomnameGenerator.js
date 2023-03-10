var myArray = [
    
    {name:'Jeetha',message:'babita ji ❤️'}, {name:'babita',message:'😇 😇 😇'}, {name:'tarak',message:'salad 🤮'},{ name:'Iyer',message:'ayio jeethalal'},{name:'bhide',message:'tapu kab sudhroge'},{name:'champak',message:'jeethoiya nahane ja nahane'},{name:'Dr.Haathi',message:'🍔 🍔'},{name:'Sodhi',message:'party sharty 🍺 🍺 🍺'}]; 
export default function generate() {
    return myArray[Math.floor(Math.random() * myArray.length)];
          
        };