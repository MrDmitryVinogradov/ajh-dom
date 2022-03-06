// TODO: write code here
console.log('app worked');
const field = document.querySelector('.field');
for (let i = 0; i < 16; i++) {
  const block = document.createElement('div');
  block.id = i;
  block.classList.add('block');
  field.appendChild(block);
}
const blocks = Array.from(document.querySelectorAll('.block'));
console.log(blocks);
function activateBlock() {
  blocks.forEach((element) => {
    if (element.classList.contains('activeBlock')) {
      element.classList.remove('activeBlock');
    }
  });
  const index = Math.floor(Math.random() * 15);
  blocks[index].classList.add('activeBlock');
}

setInterval(activateBlock, 1000);
