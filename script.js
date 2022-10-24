(async () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');

    yesBtn.setAttribute('disabled', true);

    noBtn.addEventListener('click', () => {

        if (yesBtn.hasAttribute('disabled')) yesBtn.removeAttribute('disabled');

        noBtn.style.position = 'absolute';
        noBtn.style.top = Math.random() * 85 + 'vh';
        noBtn.style.left = Math.random() * 80 + 'vw';
    });

    const urlParams = new URLSearchParams(window.location.search);
    let love_name = urlParams.get('nome');

    if (!love_name) {
        love_name = prompt('Qual o nome da pessoa que você quer pedir em namoro?');
        if (!love_name) love_name = 'amor';
        love_name = love_name.toLowerCase();
    }

    document.getElementById('name').innerHTML = love_name;
    document.title = `${love_name.charAt(0).toUpperCase() + love_name.slice(1)}, Você aceita namorar comigo?`;


})()