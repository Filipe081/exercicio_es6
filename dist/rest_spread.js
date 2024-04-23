"use strict";

var _console;
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// rest
function somar() {
  var soma = 0;
  // argument não é um array
  for (var i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  return soma;
  // arguments
  // return a + b;
}
console.log(somar(10, 30));
function somarComrest() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  var soma = numeros.reduce(function (total, numeroAtual) {
    total += numeroAtual;
    return total;
  }, 0);
  return soma;
}
console.log(somarComrest(10, 30));

// spread
var numeros = [1, 2, 3, 4];
(_console = console).log.apply(_console, numeros);
var timesDeFutebolDeSp = ['santos', 'corinthias', 'são paulo', 'bragantino'];
var timesDeFutebolDoRio = ['flu', 'botafogo', 'flamidia', 'pódearroz'];

// const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDoRio);
var timesDeFutebol = [].concat(timesDeFutebolDeSp, timesDeFutebolDoRio);

// timeDeFutebolDeSp.concat(timeDeFutebolDeRio);
console.log(timesDeFutebol);

// desestruturação aplicando apelidos

var _timesDeFutebol = _toArray(timesDeFutebol),
  item1 = _timesDeFutebol[0],
  item2 = _timesDeFutebol[1],
  item3 = _timesDeFutebol[2],
  outrosTimes = _timesDeFutebol.slice(3);
console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);