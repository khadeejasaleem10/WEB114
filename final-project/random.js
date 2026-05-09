// Khadeeja Saleem 8 May 2022 Final-Project Web 114

//My Topic for this Project is Random Quote Generator//

//The these i chose for these quotes are motivational and focused on mental health and i got them from this website: https://www.realsimple.com/ and all the credit goes to real simple website.//
const quotes = [

    {
        quote: "“Nothing is impossible, the word itself says ‘I’m possible.”",
        author: "-Audrey Hepburn"      
    },
    {
        quote: "“I cannot express how important it is to believe that taking one tiny and possibly very uncomfortable step at a time can ultimately add up to a great distance.”",
        author: "- Tig Notaro"
    },
    {
        quote: "“For there is always light. If only we’re brave enough to see it. If only we’re brave enough to be it.”",
        author: "- Amanda Gorman"
    },
    {
        quote: "“If you see someone without a smile, give 'em yours!”",
        author: "- Dolly Parton"
    },
    {
        quote: "“Here comes the sun. And I say, it’s all right.”",
        author: "- The Beatles"
    },
    {
        quote: "“Do your thing and don't care if they like it.”",
        author: "- Tiny Fey"
    },
    {
        quote: "“Try to be a rainbow in someone else’s cloud.”",
        author: "- Maya Angelou"
    },
    {
        quote: "“Real change, enduring change, happens one step at a time.”",
        author: "- Ruth Bader Ginsberg"
    },
    {
        quote: "“A dead end is just a good place to turn around.”",
        author: "- Naomi Judd"
    }
];
//using const mood CSS here to change colour when getting quote
const moods = {
    happy: {
            bg: "#21128e",
            text: "#a60f99",
    }
};

let x = Math.floor(Math.random() * quotes.length);
let previousQuote = -1;

//button will get the data from the const
const button = document.getElementById("button");

button.addEventListener("click", showRandomQuote);

//functions to get quote

function showRandomQuote(){
//using math.randon() to generate random quote
    x = Math.floor(Math.random() * quotes.length);

//using const mood to change colour when getting quote
    const mood = moods.happy;

    document.body.style.backgroundColor = mood.bg;
    document.body.style.color = mood.text;

//this will show up quote content 
//and this will show the author along with it    
    document.getElementById("quote").textContent = quotes[x].quote;
    document.getElementById("author").textContent = quotes[x].author;
    
} 
//adding a second listenier 
    document.addEventListener("click", function(event){
        
        if (event.key === "Enter") {

            showRandomQuote();
        
        }

});

        if (x === previousQuote) {
            x = Math.floor(Math.random() * quotes.length);
        }
            previousQuote = x;

