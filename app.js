console.log("Let's get this party started!");

async function getGif(q) {
    try {
        const response = await axios.get('http://api.giphy.com/v1/gifs/search', 
            {params: {q, limit: 1, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
        return response.data.data[0].images.original.url;
    } catch {
        alert("No results for that term!");
        return "https://www.armytimes.com/resizer/ZWHTQOIAIwXC8v0zZ5Nzdsd-bOY=/800x0/filters:quality(100)/arc-anglerfish-arc2-prod-mco.s3.amazonaws.com/public/7MZYBRWHFFBVPF2UFOLIJUPQN4.jpg"
    }
}

async function addGif(term) {
    const url = await getGif(term);
    const $newGif = $(`<img src="${url}" class="gif img-fluid mx-auto">`);
    const $gifDiv = $('<div></div>')
                    .addClass('gif-container')
                    .addClass('col-4')
                    .append($newGif);
    $('#party-zone').append($gifDiv);
}

$('#search').on('submit', e => {
    e.preventDefault();
    addGif($('#term').val());
});

$('#remove').on('click', () => {
    $('#party-zone').empty()
});