

function getQuote(){

    fetch("https://type.fit/api/quotes")
    .then((res) => {
        return res.json();
        })
    .then((data) => {

        
        const interval = setInterval(()=>{
            let number = Math.floor(Math.random() * 100);

           

            const quotes= document.getElementById("quotes");
            quotes.classList.toggle("quote");

            const quote = document.getElementById("quote");
            quote.innerText = data[number].text;
            quote.classList.toggle("quote");
            


            const author= document.getElementById("author");
            author.innerText = data[number].author;
            author.classList.toggle("author");



         },7000);


         
        
    });
}

getQuote();
