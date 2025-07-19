const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました。';
        console.log('2秒後にメッセージが変更されました。');
    }, 2000);
    console.log('たった今、ボタンがクリックされました。');
});