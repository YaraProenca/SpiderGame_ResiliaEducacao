

function tomHollandSpider(){

    var hollandSpider = parseInt( prompt( 'blalalala: \n' + '1 - blalala \n' + '2 - blalala'));

    while(true){

        hollandSpider = parseInt( prompt( 'blalalala: \n' + '1 - blalala \n' + '2 - blalala'));      

        if(hollandSpider === 1) {
            
            alert('SE DEU MAU! Volte ao início');

           return document.write(
                `<body class="bgTomHolland">
                    <a href="/index.html">
                        <button>início</button>
                    </a>
                <body>`
            );
            break
        }
        
        else if(hollandSpider === 2) {
           return document.write(
               `<body class="bgTomHolland">
                    <a href="/levelsTomHolland_HTML/levelTwoHolland.html">
                            <button> next </button>
                    </a>
                <body>`   
              
            );
            break
        }
    }
}


tomHollandSpider();





