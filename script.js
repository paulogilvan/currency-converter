const convertButton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select');

function convertValue() {
  const inputCurrencyValue = document.querySelector('.input-currency').value;
  const currencyValueToConvert = document.querySelector('.currency-value-to-convert'); //Valor em Real
  const currencyValueToConverted = document.querySelector('.currency-value'); // Outras Moedas

  const dolarToday = 5.2;
  const euroToday = 6.2;

  if(currencySelect.value == 'dolar') {
    // Se o select estiver selecionado o valor de dolar, entra aqui
    currencyValueToConverted.innerHTML = new Intl.NumberFormat('en-US', { // Formata Moeda EUA
      style: 'currency',
      currency: 'USD'
    }).format(inputCurrencyValue / dolarToday);
  }

  if(currencySelect.value == 'euro') {
    // Se o select estiver selecionado o valor de euro, entra aqui
    currencyValueToConverted.innerHTML = new Intl.NumberFormat('de-DE', { // Formata Moeda Euro
      style: 'currency',
      currency: 'EUR'
    }).format(inputCurrencyValue / euroToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', { // Formata Moeda Brasileira
    style: 'currency',
    currency: 'BRL'
  }).format(inputCurrencyValue);
  
}

function changeCurrency() {
  const currencyName = document.getElementById('currency-name');
  const currencyImage = document.querySelector('.currency-img');

  if(currencySelect.value == 'dolar') {
    currencyName.innerHTML = 'Dolar americano';
    currencyImage.src = './assets/dolar.png';
  }

  if(currencySelect.value == 'euro') {
    currencyName.innerHTML = 'euro';
    currencyImage.src = './assets/euro.png';
  }

  convertValue()
}

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValue);