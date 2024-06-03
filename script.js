const iniciar = () => {
    let imagens = [
        'imagens/pexels-mayday-1545743.jpg',
        'imagens/pexels-lynxexotics-3752194.jpg'
    ];
    let indiceAtual = 0;

    const clickTroca = (evento) => {
        evento.preventDefault();
        let imag2 = document.getElementById('carro');
        indiceAtual = (indiceAtual + 1) % imagens.length; 
        imag2.src = imagens[indiceAtual]; 
    };

    document.getElementById('troca').addEventListener('click', clickTroca);
};

document.addEventListener('DOMContentLoaded', iniciar);