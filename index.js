
const PORT = 8000

/*
Axios é um cliente http baseado em promessa para o navegador e
node.js, o Axios facilita o envio de solicitações http para endpoints
rest e realizar operações CRUD.
Use-o para obter, postar, colocar e excluir dados.*/
const axios = require('axios')

/*Cheerio é um pacote que está sendo usado para escolher elementos
HTML de uma página na web. Funciona passando marcação
e fornece uma API para percorrer e manipular o
estrutura de dados resultante. Implementação do seletor de Cheerio
é quase idêntico ao jquery.
*/

const cheerio = require('cheerio')

/*Express é um framework de back-end para node.js,
vamos instalá-lo para listen paths e listen nossa port para ter certeza 
de que tudo está funcionando ok. Se visitarmos um determinado caminho ou 
url, ele executará algum código e ele escutará a porta que definimos
*/ 
const express = require('express')
const app = express()

const url = 'https://www.alagoas24horas.com.br'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        $('.title', html).each(function() {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

