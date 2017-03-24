
const noun = 'noun';
const verb = 'verb';

const words = [
  { word: 'Regal', type: noun, article: 'das', plural: 'Regale' },
  { word: 'Tisch', type: noun, article: 'der', plural: 'Tische' },
  { word: 'Lampe', type: noun, article: 'die', plural: 'Lampen' },
]

const articles = [ 'der', 'die', 'das' ];

const nounSelector = {
    count: () => words.filter(x => x.type === noun).length,
    getByIndex: i => words.filter(x => x.type === noun)[i],
}

const questionGenerators = {
  'article': {
    selector: nounSelector,
    createQuestion: x => {
      return {
        type: 'variants',
        querstionText: `What is the article for word "${x.word}"?`,
        variants: articles,
        test: (answer) => {
          return { result: answer === x.article, message: `"${x.article} ${x.word}" is correct.` };
        }
      };
    }
  },
  
  'plurals': {
    selector: nounSelector,
    createQuestion: x => {
      if (x.word)
      return {
        type: 'input',
        querstionText: `What is the plural for word "${x.article} ${x.word}"?`,
        test: (answer) => {
          return { result: answer === x.plural, message: `Plural of "${x.article} ${x.word}" is "die ${x.plural}".` };
        }
      };
    }
  }
}

function rnd(a, b) {
  var max = Math.max(a || 0, b || 0);
  var min = Math.min(a || 0, b || 0);
  const size = max - min;
  return Math.floor(Math.random() * size + min);
}

function getArrayRandomItem(arr) {
  return arr[rnd(arr.length)];
}

function getObjectRandomProperty(obj) {
  return obj[getArrayRandomItem(Object.keys(obj))];
}

function getRandomItem(obj) {
  if (Array.isArray(obj)) {
    return getArrayRandomItem(obj)
  } else {
    return getObjectRandomProperty(obj);
  }
}

function selectData(selector) {
  const index = rnd(selector.count());
  return selector.getByIndex(index);
}

function createQuestion(generator) {
  const data = selectData(generator.selector);
  return generator.createQuestion(data);
}

function getRandom() {
  const questionGenerator = getRandomItem(questionGenerators);
  return createQuestion(questionGenerator);
}

export default { getRandom };
