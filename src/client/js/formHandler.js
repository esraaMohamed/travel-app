// import {checkValidUrl} from './urlChecker'


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let destination = document.getElementById('destination').value
    let travelDate = document.getElementById('date').value
    console.log('Destination', destination, 'Travel Date', travelDate)
    // const isValidUrl = checkValidUrl(formText)
    // if(!isValidUrl){
    //     console.log('Invalid Url')
    //     document.getElementById('error').removeAttribute('hidden')
    //     document.getElementById('name').classList.toggle('errorBorder')
    //     return
    // }
    // document.getElementById('error').setAttribute('hidden','')
    console.log("::: Form Submitted :::")
    // document.getElementById("submit").removeAttribute("disabled");
    // fetch('http://localhost:8081/sentiment',
    //     {
    //         method: 'POST',
    //         credentials: 'same-origin',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*'
    //         },
    //         body: JSON.stringify({ url: destination })
    //     })
    //     .then(data => data.json())
    //     .then((data) => {
    //         console.log('DATA from form handler', data)
    //         document.getElementById('subjectivity').innerHTML = `The subjectivity of the text is: ${data.subjectivity}`
    //         document.getElementById('agreement').innerHTML = `The agreement between the sentiments detected in the text is: ${data.agreement}`
    //         document.getElementById('score').innerHTML = `The polarity found (or not found) in the element it refers to is: ${data.score_tag}`
    //         document.getElementById('confidence').innerHTML = `The confidence associated with the sentiment analysis performed on the text: ${data.confidence}`
    //         document.getElementById('irony').innerHTML = `The irony of the text is: ${data.irony}`
    //     })

}

export { handleSubmit }
