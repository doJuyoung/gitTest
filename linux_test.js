let index = 0
const words = [ '2022.03.29'
               '리눅스 git download test중'
               '출력 성공 !'
               ]
setInterval(
    () => {
              console.log(words[(index++)%words.length])
    }, 1000
)
