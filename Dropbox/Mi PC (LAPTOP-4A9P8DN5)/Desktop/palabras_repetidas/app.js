
//funcion para obtener las letras

function getDocumentLetters(){
    var entryText = document.querySelector('#texto-entrada').textContent; 
    return entryText.replace(/[^a-zA-Z_0-9-]/gi, '').toUpperCase().split("")
}

//funcion encargada de contar las letras

function countLetters(textArray) {
    var result = {}
    textArray.forEach(letter => {
        if (!result[letter]){
            result[letter] = 1
        }
        else{
            result[letter] += 1
        }
    })
    return result
}

//funcion encargada de ingresar valores y generar "<p><strong>Palabra</strong>: Cantidad </p>" dinamicos

function insertLetterResults(result){
    var resultsArray= Object.entries(result)
        resultsArray.forEach(values => {
        var resultTag = document.querySelector('#resultados')
        var paragraph = document.createElement("p")
        var strong = document.createElement("strong")
        var span = document.createElement("span")
        var strongText = document.createTextNode(`Letra: ${values[0]}`);
        var spanText = document.createTextNode(`Cantidad: ${values[1]}`);
        strong.appendChild(strongText)
        span.appendChild(spanText)
        paragraph.appendChild(strong)
        paragraph.appendChild(span)
        resultTag.appendChild(paragraph) // fuente funcion appendChild "https://developer.mozilla.org/es/docs/Web/API/Node/appendChild"
    })
}

//funcion encargada de mostrar los resultados

function letterCount(){
    var lettersArray = getDocumentLetters()
    var resultsArray = countLetters(lettersArray)
    insertLetterResults(resultsArray)
}

//---------------------------------------------------------------------

//funcion para obtener palabras

function getDocumentWords(){
    var entryText = document.querySelector('#texto-entrada').textContent;
    return entryText.match(/\b(\w+)\b/g)
}

function countWords(wordArray){
    var result = {}
    wordArray.forEach(word => {
        var capitalizedWord = word.toUpperCase()
        if (!result[capitalizedWord]){
            result[capitalizedWord] = 1
        }
        else{
            result[capitalizedWord] += 1
        }
    })
    return result
}

function insertWordResults(result){
    var resultsArray = Object.entries(result)
    resultsArray.forEach(values => {
        var resultTag = document.querySelector('#resultados2')
        var paragraph = document.createElement("p")
        var strong = document.createElement("strong")
        var span = document.createElement("span")
        var strongText = document.createTextNode(`Palabra: ${values[0]}`);
        var spanText = document.createTextNode(`Cantidad: ${values[1]}`);
        strong.appendChild(strongText)
        span.appendChild(spanText)
        paragraph.appendChild(strong)
        paragraph.appendChild(span)
        resultTag.appendChild(paragraph)
    })
}

function wordCount(){
    var wordsArray = getDocumentWords()
    var resultsArray = countWords(wordsArray)
    insertWordResults(resultsArray)
}

letterCount()
wordCount()
