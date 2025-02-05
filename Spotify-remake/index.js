/*DOM*/
const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlist');

function requestApi(searchTerm) {
    /*pesquisar somente o que parecer com o digitado*/
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
    /*pesquisar somente o que parecer com o digitado*/
        .then((response) => response.json())
        .then((result) => displayResults(result));
        /*metodo com promisses, leitura em arquivos, responder*/
        
}

function displayResults(result) {
    /*aparecer o resultado */
    resultPlaylist.classList.add('hidden')
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');
    
    result.forEach(element => {
    artistName.innerText = element.name;
    artistImage.src = element.urlImg;
    /*cada descricao do elemento esta no json*/
    });
    
    resultArtist.classList.remove('hidden');
    }

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    /*cria uma constante com o valor do input e deixa tudo minúsculo*/
    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden');
        resultArtist.classList.add('hidden');
        return;
    }
    /* == ve se sao iguais
   === ve se sao iguais e do mesmo tipo */
    requestApi(searchTerm);
})
/*'escuta' quando acontecer o evento*/