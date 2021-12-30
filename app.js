console.log("Let's get this party started!");

async function getGif (term) {
  const url = 'http://api.giphy.com/v1/gifs/search';
  const key = '4ov034goM9qi9KAuk1DoryhYQVCMMIe2';
  const res = await axios.get(url, {params: { q : term, api_key: key}});
  const gif = res.data.data[0].images.downsized_medium.url //note that the url works as the first url in the object image is to a page rather than the image source
  console.log(gif);
  const newGif = document.createElement('img')
  newGif.setAttribute('src', gif);
  gifs.prepend(newGif);
};

const submit = document.querySelector('#submit');
const clear = document.querySelector('#clear');
const gifs = document.querySelector('#gifs');

submit.addEventListener('click', function(e){
  e.preventDefault();
  const submission = document.querySelector('#search');
  const term = submission.value;
  const src = getGif(term);
});

clear.addEventListener('click', function(e){
  e.preventDefault();
  gifs.innerHTML = '';
})