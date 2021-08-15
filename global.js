function userRedirection(choice1, choice2) {
    var escolha

    while (true) {

        escolha = parseInt(prompt('Qual opção escolherá: \n' + '1  ou 2 '));

        if (escolha === 1 || escolha === 2) {

            if (escolha === 1) {

                location.replace(choice1);
            }

            else {
                
                location.replace(choice2);
            }


            break
        }

    }

    return escolha

}