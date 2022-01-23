async function get () {
  let result = ''
  let xhr = new XMLHttpRequest()
  let myPromise = new Promise(resolve => {
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status <= 210) resolve(this.response)
    }
    xhr.send()
  })
  let msg = await myPromise
  let obj = JSON.parse(msg)
  let html = ''
  for (let item in obj) {
    console.log(item)
    html += `<ul><li>${obj[item]['id']}</li>
          <li>${obj[item]['title']}</li>
          <li>${obj[item]['body']}</li>
          </ul><hr>`
  }
  document.getElementById('data').innerHTML = html
}

async function post () {
  let result = ''
  let html = ''
  let myPromise = new Promise(resolve => {
    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts')
    xhr.setRequestHeader('Content-type', 'Application/json;charset=UTF-8')
    const body = JSON.stringify({
      title: 'Hello Dummy',
      userID: '12',
      body: 'Dummy Body'
    })
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status <= 210) resolve(this.response)
    }
    xhr.send(body)
  })

  let msg = await myPromise
  let obj = JSON.parse(msg)
  console.log(obj)
  html += `<ul><li>Title:-${obj.title}</li>
      <li>userID:-${obj['userID']}</li>
      <li>body:-${obj['body']}</li>
      <li>id:-<b>${obj['id']}</b></li>
      </ul>`
  document.getElementById('data').innerHTML = html
}

async function put () {
  let result = ''
  let html = ''
  let xhr = new XMLHttpRequest()
  let myPromise = new Promise(resolve => {
    xhr.open('PUT', 'https://jsonplaceholder.typicode.com/posts/13')
    xhr.setRequestHeader('Content-type', 'Application/json;charset=UTF-8')
    const body = JSON.stringify({
      title: 'Updated Title',
      body: 'Updated body',
      userId: 1
    })
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status <= 210) resolve(this.response)
    }
    xhr.send(body)
  })

  let msg = await myPromise
  let obj = JSON.parse(msg)
  console.log(obj)
  html += `<ul><li>Title:-${obj.title}</li>
      <li>userID:-${obj['userId']}</li>
      <li>body:-${obj['body']}</li>
      <li>id:-<b>${obj['id']}</b></li>
      </ul>`
  document.getElementById('data').innerHTML = html
}

async function del () {
  let xhr = new XMLHttpRequest()
  let myPromise = new Promise(resolve => {
    xhr.open('DELETE', 'https://jsonplaceholder.typicode.com/posts/13', true)
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status <= 210) resolve(this.response)
    }
    xhr.send()
  })

  let msg = await myPromise
  alert('Delete Successfull' + msg)
}

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//     title: 'updated title',
//     body: 'updated body',
//     userID: 12
//   }),
//   headers: { 'Content-type': 'application/json;charset=UTF-8' }
// })
//   .then(function (response) {
//     return response.json()
//   })
//   .then(function (data) {
//     console.log(data)
//   })
