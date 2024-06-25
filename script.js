const click_content = document.getElementById('click_content');
const count_content = document.getElementById('count');

click_content.addEventListener('click', () => {
  count.innerText = Number(count.innerText) + 1;
});
