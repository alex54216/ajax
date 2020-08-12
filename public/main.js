let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
btn1.onclick = function () {
  let request = new XMLHttpRequest()
  request.open('GET', '/style.css')
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      let style = document.createElement('style')
      style.innerHTML = request.response
      let head = document.querySelector('head')
      head.appendChild(style)
    }
  }
  request.send()
}
btn2.onclick = () => {
  let request = new XMLHttpRequest()
  request.open('GET', '2.js')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let script = document.createElement('script')
      script.innerHTML = request.response
      document.querySelector('body').appendChild(script)
    }
  }
  request.send()
}
btn3.onclick = () => {
  let request = new XMLHttpRequest()
  request.open('GET', '3.html')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let oDiv = document.createElement('div')
      oDiv.innerHTML = request.response
      console.log(request.response)
      document.querySelector('body').appendChild(oDiv)
    }
  }
  request.send()
}
btn4.onclick = () => {
  let request = new XMLHttpRequest()
  request.open('GET', '4.xml')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let dom = request.responseXML
      const text = dom.getElementsByTagName('head')[0].textContent
      console.log(text.trim())
    }
  }
  request.send()
}
btn5.onclick = () => {
  let request = new XMLHttpRequest()
  request.open('GET', '5.json')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let msg = request.response
      msg = JSON.parse(msg)
      console.log(msg)
    }
  }
  request.send()
}
let n = 1
btn6.onclick = () => {
  let request = new XMLHttpRequest()
  request.open('GET', `page${n + 1}`)
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let arr = request.response
      arr = JSON.parse(arr)
      arr.forEach((item) => {
        const li = document.createElement('li')
        li.innerHTML = item.id
        xxx.appendChild(li)
      })
      n += 1
    }
  }
  request.send()
}
