//your code here!
const infiList = document.getElementById('infi-list');
let count = 1;

for (let i = 0; i < 10; i++) {
  const li = document.createElement('li');
  li.textContent = `Item ${count}`;
  infiList.appendChild(li);
  count++;
}

infiList.addEventListener('scroll', () => {
  if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
    for (let i = 0; i < 10; i++) {
      const li = document.createElement('li');
      li.textContent = `Item ${count}`;
      infiList.appendChild(li);
      count++;
    }
  }
});
