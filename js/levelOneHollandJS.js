// hollandSpider();
// function hollandSpider(){
//     var valor = parseInt(
//         prompt(
//             "blablabla: \n"  + "1 blabal \n" + " 2 blalala"
//         )
        
//     );
// }

function hollandSpider(){
    
}




var hollandSpider = parseInt( prompt( 'blalalala: \n' + '1 - blalala \n' + '2 - blalala'));



if(hollandSpider === 1) {
    alert('SE DEU MAU! Volte ao início');
    document.write(
        `<body class="bgTomHolland">
            <a href="/index.html">
                <button>início</button>
            </a>
        <body>`
    );
}

else{
    document.write(
       `<body class="bgTomHolland">
            <a href="/levelsTomHolland_HTML/levelTwoHolland.html">
                    <button> next </button>
            </a>
        <body>`   
      
    );
}