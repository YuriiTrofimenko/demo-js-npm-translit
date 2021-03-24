var translit = require('translit')({
  'И': 'I',
  'ж': 'zh',
  'е': 'e',
  'в': 'v',
  'c': 's',
  'к': 'k'
})
console.log(translit('Ижевск'))