export default (type='GET', url, data) => new Promise((reslove, reject) => {
  const xhr = new XMLHttpRequest()
  xhr.open(type, `http://localhost:5129${url}`, true)
  let sendData = null
  if (type === 'POST') {
    xhr.setRequestHeader('content-type', 'application/json')
    sendData = JSON.stringify(data)
  }
  xhr.send(sendData)

  xhr.onreadystatechange = () => {
    // xhr.readyState === 4 也可以用 XMLHttpRequest.DONE 代替。XMLHttpRequest.DONE 的计算结果就是 4。
    if (XMLHttpRequest.DONE) {
      //根据服务器的响应内容格式处理响应结果
      if (xhr.status === 200) {
        reslove(xhr.responseText)
      } else {
        reject()
      }
    }
  }
});
