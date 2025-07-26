const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  setTimeout(() => {
   // li要素を新しく作成する
  const childList = document.createElement('li');

  childList.textContent = 'ボタンをクリックしました';

  text.textContent = "ボタンをクリックしました。";
},2000);
});