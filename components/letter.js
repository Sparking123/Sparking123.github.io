const btnOpenElement = document.querySelector('#open')
const coverElement = document.querySelector('.container_cover')
const paperElement = document.querySelector('.paper')
const Key = document.querySelector('#key')
const pingElement = document.querySelector('#ping')
const heartElement = document.querySelector('.heart')

btnOpenElement.addEventListener('click', manageLetter)

var open = false
function manageLetter() {
  btnOpenElement.disabled;
  if(open == false){
      coverElement.classList.add('open-cover')
      pingElement.classList.remove('ping')
      pingElement.classList.add('delete-ping')
      Key.classList.add('show-key')
      Key.style.display = 'block'

      setTimeout(()=>{
        coverElement.style.zIndex = -1
        paperElement.classList.remove('close-paper')
        paperElement.classList.add('open-paper')
    
        heartElement.style.display = 'block'
        Key.style.opacity = '1'
        
        open = !open
      }, 600)
  }else{
      paperElement.classList.remove('open-paper')
      paperElement.classList.add('close-paper')

      setTimeout(()=>{
        coverElement.style.zIndex = 0
        coverElement.classList.remove('open-cover')
        pingElement.classList.add('ping')
        pingElement.classList.remove('delete-ping')
    
        heartElement.style.display = 'none'

        open = !open
      }, 600)
  }
}
