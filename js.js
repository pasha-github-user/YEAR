const phrasesContainer = document.getElementById('phrases-container')
const music = document.getElementById('music')
const phrases = [
    'Я люблю тебя',
    'Ты просто солнышко',
    'Самая красивая',
    'Невозможно встретить кого-то красивее тебя',
    'Самая добрая и понимающая',
    'Иногда ленивая :)',
    'Но мне это нравится',
    'Люблю в тебе все',
    'Твою улыбку',
    'Твое чувство юмора',
    'Твои глаза',
    'Твои волосы',
    'Твою фигуру конечно же(просто огонь &#128293;)',
    'Мы с тобой многое прошли',
    'Было много ссор и недопониманий',
    'Но это все мелочи',
    'Каждый день с тобой вдохновляет меня',
    'Двигаться дальше',
    'Твоя поддержка просто бесценна',
    {
        phrase: 'Хочу просыпаться с тобой так каждый день',
        img:'img/1.jpg'
    },
    {
        phrase: 'Ну или так',
        img:'img/4.jpg'
    },
    'Ты прекрасна в любой момент',
    {
        phrase: 'В такой &#128525;',
        img:'img/12.jpg'
    },
    {
        phrase: 'И в такой тоже',
        img: 'img/8.jpg'
    },
    {
        phrase: 'Такую красотку невозможно не хотеть &#128527;',
        img: 'img/6.jpg'
    },
    {
        phrase: 'А такую тем более',
        img: 'img/5.jpg'
    },
    {
        phrase: 'В то же время мы неплохо выглядим вместе',
        img: 'img/11.jpg'
    },
    {
        phrase: '',
        img: 'img/9.jpg'
    },
    {
        phrase: 'Здесь вообще крутяк, я считаю',
        img: 'img/10.jpg'
    },
    'Ну и в конце, я думаю, мы закончим таким',
    {
        phrase: '&#129325;',
        img: 'img/3.jpg'
    },
    'Но это уже совсем другая история...&#10084;',
    'Ну а пока'
]
const getPhraseWithImg = idx => `
<div class="phrase-container">
    <div class="phrase-photo" 
     style="background-image: url(${phrases[idx].img})"></div>
    ${
        !!phrases[idx].phrase 
          ? `<div class="phrase">${phrases[idx].phrase}</div>`
          : ''
    }
</div>`
const getPhrase = idx => `<div class="phrase">${phrases[idx]}</div>`
const getLoader = (text, isAnimated) => `
<div class="loader">
    <img src="img/heart.png" class=" ${!isAnimated ? 'no-animation' : ''} ">
    <div>${text}</div>
</div>
`
phrasesContainer.innerHTML = getLoader('Нажми на меня', false)
const insertPhrase = () => {
    music.play()
    var counter = 0;
    phrasesContainer.requestFullscreen({navigationUI: "hide"})
    phrasesContainer.innerHTML = getLoader('Любовь загружается...', true)
    setInterval(function(){

        phrasesContainer.innerHTML = phrases[counter]?.img ? getPhraseWithImg(counter) : getPhrase(counter)
        counter++;
        if(counter === phrases.length ) {
            counter = 0;
        }
    }, 5000);

}
document.querySelector('.loader').addEventListener('click', () => insertPhrase())
