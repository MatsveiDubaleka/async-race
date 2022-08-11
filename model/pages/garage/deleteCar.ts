
const getBtnsRemove = ()  => {
  const btnsRemove = document.querySelectorAll('.btn-remove');
  btnsRemove.forEach((item) => {
    item.addEventListener('click', (e) => console.log(e))
  })
}

try {
  const btnsRemove = document.querySelectorAll('.btn-remove');
} catch (error) {
  console.error(error);
}

getBtnsRemove();