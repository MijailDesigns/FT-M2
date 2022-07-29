var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }

  for (let i = 0; i < startEl.children.length; i++) {
    let elementos = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet, ...elementos];
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === "#") {
    return 'id'
  }
  if (selector[0] === '.') {
    return 'class'
  }
  if (selector.split('.').length > 1) {
    return 'tag.class'
  }
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
   return matchFunction = (el => '#' + el.id === selector);
  } else if (selectorType === "class") {
    return matchFunction = el =>{
      let a = el.classList;
      // a.forEach(element => {
      //   if (`.${element}` === selector) return true;
      // });
      // return false;
      for (let i = 0; i < a.length; i++) {
        if (`.${a[i]}` === selector) return true;      
      }
      return false;
    } 
  } else if (selectorType === "tag.class") {
    matchFunction = el =>{
      var [tagBuscado, classBuscado] = selector.split('.'); //img.photo  -> img, photo

      /*
      **otra solucion
        const elementoClassName = elemento.className.split(' ');
        const elementoTagName = elemento.tagName.toLowerCase();
        return tagBuscado === elementoTagName && elementoClassName.includes(classBuscado);
      */
      return matchFunctionMaker(tagBuscado)(el) && matchFunctionMaker(`.${classBuscado}`)(el); // "." + classBuscado
    }
    
  } else if (selectorType === "tag") {
    return matchFunction = (el => el.tagName.toLowerCase() === selector.toLowerCase())
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
