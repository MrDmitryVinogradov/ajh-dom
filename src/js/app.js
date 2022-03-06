// TODO: write code here
const field = document.querySelector('.field');
for (let i = 0; i < 16; i += 1) {
  const block = document.createElement('div');
  block.id = i;
  block.classList.add('block');
  field.appendChild(block);
}
const blocks = Array.from(document.querySelectorAll('.block'));

//  Randomizer
function activateBlock() {
  let prevIndex = 0;
  blocks.forEach((element) => {
    if (element.classList.contains('activeBlock')) {
      element.classList.remove('activeBlock');
      prevIndex = element.index;
    }
  });
  const index = Math.floor(Math.random() * 15);
  if (prevIndex !== index) {
    blocks[index].classList.add('activeBlock');
  } else {
    blocks[0].classList.add('activeBlock');
  }
}

//  Interval of randomizer
setInterval(activateBlock, 1000);
