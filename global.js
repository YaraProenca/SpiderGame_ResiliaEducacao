function userRedirection(fase1, fase2) {
    var escolha

    while (true) {

        escolha = parseInt(prompt('blalalala: \n' + '1 - blalala \n' + '2 - blalala'));

        if (escolha === 1 || escolha === 2) {

            if (escolha === 1) {

                // alert('SE DEU MAU! Volte ao início');

                location.replace(fase1);
            }

            else {
                location.replace(fase2);
            }


            break
        }

    }

    return escolha

}