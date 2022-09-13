let ageText = prompt('Digite a sua idade');
let age = Number(ageText);

    while (age < 18){
        ageText = prompt('O site não pode ser acessado por menores de 18 anos.')
        age = Number(ageText);
    }
        document.write(' Seja bem vindo!!! ')


        let opcao;
        do{
            opcao = Number(prompt('Escolha uma opção: \n\n1 - bife\n2 - macarrão\n3 - figado.'));
        }
        while(opcao < 1 || opcao > 3);

        switch (opcao) {
            case 1:
                document.write('Escolheu bife com batata frita, mas ganhou Pão com pate');
                break;
                    case 2:
                        document.write('Escolheu macarrão com molho branco, mas ganhou peixe frito');
                        break;
                            case 3:
                                document.write('Escolheu Figado com cebola, mas ganhou uma ovo frito');
                                break
            default:
                break;
        }