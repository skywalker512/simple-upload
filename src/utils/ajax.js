export default (type='GET', url, data, contentType , uploadListener) => new Promise((reslove, reject) => {
  const xhr = new XMLHttpRequest()
  xhr.open(type, `http://localhost:5129${url}`, true)
  xhr.timeout = 5000 // 超时时间，单位是毫秒
  let sendData = null
  if (type === 'POST') {
    xhr.setRequestHeader('content-type', contentType)
    sendData = JSON.stringify(data)
    xhr.timeout = 20000
  }
  if (uploadListener) {
    xhr.upload.onprogress = uploadListener
  }
  xhr.ontimeout = function () {
    reject('请求超时')
  };
  xhr.send(sendData)

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      //根据服务器的响应内容格式处理响应结果
      if (xhr.status === 200) {
        reslove(xhr.responseText)
      } else {
        reject('请求未成功')
      }
    }
  }
});
