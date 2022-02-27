$("#form").submit(function (e){
    e.preventDefault()

    var query= $("#search").val()

    let result = ''

    var API_KEY = 'b342c187515a432c3fa38ce0a6e433ca'

    var url = 'http://api.serpstack.com/search?access_key=' + API_KEY + '&type=web&query=' + query
    console.log(url)


    $.get(url,function(data){

        $("#result").html('')
        console.log(data)

        data.organic_results.forEach(res =>  {

            result = `
            
            <h1>${res.title}</h1><br><a target="_blank" href="${res.url}">${res.url}</a>
            <p>${res.snippet}</p>

            `

            $("#result").append(result)

        })
    })
})