export default (file, step=1) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result)
    }

    reader.onerror = reject;

    reader.readAsBinaryString(file.slice((step-1)*3145728, step*3145728))
  })
}