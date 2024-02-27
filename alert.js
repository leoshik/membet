const button = document.querySelector('#Button');
const callback = () => {
    document.getElementById('bb 1').innerHTML=Math.floor(Math.random() * (5 - 1) + 1);
}

button.addEventListener('click', callback);