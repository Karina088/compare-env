// Функция для сохранения cookie
function setCookie(name, value, expirationDelta) {
  const d = new Date();
  d.setTime(d.getTime() + (expirationDelta * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Функция для чтения конкретного значения cookie
function getCookie(name) {
  name = name + "=";
  let cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
}

let currentLevel // текущий уровень
let metadata // список доступных уровней

function init() {
  let clientProgress = getCookie('clientProgress') // здесь хранятся ключи решённых пользователем задач
  if (!clientProgress) { // если cookie ещё не задана, заводим пустой массив
    setCookie('clientProgress', '[]', 365)
    clientProgress = '[]'
  }
  clientProgress = JSON.parse(clientProgress)
  for (let levelInfo of metadata.levels) { // среди уровней выбираем первый нерешённый
    if (!clientProgress.includes(levelInfo.key)) {
      console.log('init clientProgress = ' + JSON.stringify(clientProgress) + ' does not include levelInfo.key ' + levelInfo.key)
      currentLevel = levelInfo
      break
    }
  }
  if (!currentLevel) { // если все уровни решены, выбираем первый
    currentLevel = metadata.levels[0]
  }

  const levelsContent = document.querySelector('#levels_content')
  for (let levelContent of metadata.levels) {
    levelsContent.innerHTML += '\n' + `<div style="padding: 6px 0px;"><button type="button" class="modal__levelNext"> ${levelContent.key} ${levelContent.name}</button></div>`
  }

  console.log('init clientProgress = ' + JSON.stringify(clientProgress))
  console.log('init currentLevel = ' + JSON.stringify(currentLevel))
  const spanLevel = document.querySelector('.span__level')
  const spanName = document.querySelector('#span__name')
  spanLevel.innerHTML = currentLevel.key
  spanName.innerHTML = currentLevel.name
  return currentLevel
}

function replaceChildren(source, target) {
  while (target.firstChild) {
    target.removeChild(target.lastChild);
  }
  target.append(...source.childNodes);
}

let answer

function loadLevel(level) {
  console.log('load level = ' + JSON.stringify(level))

  fetch('/levels/' + level.key + '.xml')
    .then(r => r.text())
    .then(t => new DOMParser().parseFromString(t, 'text/html'))
    .then(xml => {
      replaceChildren(xml.querySelector('left'), document.querySelector('#left'))
      // replaceChildren(xml.querySelector('operator'), document.querySelector('#operator'))
      answer = xml.querySelector('operator').innerHTML
      replaceChildren(xml.querySelector('right'), document.querySelector('#right'))
      // replaceChildren(xml.querySelector('explanation'), document.querySelector('#explanation'))
    })

    .then(() => true)
}

fetch('/levels/metadata.json')
  .then(r => r.text())
  .then(t => metadata = JSON.parse(t))
  .then(init)
  .then(loadLevel)
  .then(() => true) // решение для ошибки: Uncaught (in promise) Error: A listener indicated an asynchronous ...
