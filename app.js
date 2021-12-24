console.log("Let's get this party started!");

async function getGif (term) {
  const url = 'api.giphy.com/v1/gifs/search';
  const key = '4ov034goM9qi9KAuk1DoryhYQVCMMIe2';
  const res = await axios.get(url, {params: { q : term, api_key: key}})
};

const btn = document.querySelector('#submit')

btn.addEventListener(function(e){
  e.preventDefault();
  const submission = document.querySelector('#search');
  const term = submission.value;
  getGif(term);
})