"use strict";

const supportedCurrencies = [
  ["AED", "Dirham dos Emirados Árabes Unidos"],
  ["AFN", "Afegani Afegão"],
  ["ALL", "Lek albanês"],
  ["AMD", "Dram Armênio"],
  ["ANG", "Florim das Antilhas Holandesas"],
  ["AOA", "Kwanza Angolano"],
  ["ARS", "Peso Argentino"],
  ["AUD", "Dólar Australiano"],
  ["AWG", "Florim de Aruba"],
  ["AZN", "Manat do Azerbaijão"],
  ["BAM", "Marco Conversível da Bósnia e Herzegovina"],
  ["BBD", "Dólar de Barbados"],
  ["BDT", "Taka de Bangladesh"],
  ["BGN", "Lev búlgaro"],
  ["BHD", "Dinar do Bahrein"],
  ["BIF", "Franco do Burundi"],
  ["BMD", "Bermudense Dólar"],
  ["BND", "Dólar de Brunei"],
  ["BOB", "Boliviano Boliviano"],
  ["BRL", "Real Brasileiro"],
  ["BSD", "Dólar das Bahamas"],
  ["BTN", "Ngultrum Butanês"],
  ["BWP", "Pula Botsuana"],
  ["BYN", "Rublo Bielorrusso"],
  ["BZD", "Dólar Belize"],
  ["CAD", "Dólar Canadense "],
  ["CDF", "Franco congolês"],
  ["CHF", "Franco suíço"],
  ["CLP", "Peso chileno"],
  ["CNY", "Renminbi chinês"],
  ["COP", "Peso Colombiano"],
  ["CRC", "Colon Costarriquenho"],
  ["CUP", "Peso Cubano"],
  ["CVE", "Escudo Cabo-verdiano"],
  ["CZK", "Coroa Tcheca"],
  ["DJF", "Franco do Jibuti"],
  ["DKK", "Coroa Dinamarquesa"],
  ["DOP", "Peso Dominicano"],
  ["DZD", "Dinar argelino"],
  ["EGP", "Libra Egípcia"],
  ["ERN", "Nakfa da Eritreia"],
  ["ETB", "Birr etíope"],
  ["EUR", "Euro"],
  ["FJD", "Dólar de Fiji"],
  ["FKP", "Libra das Ilhas Falkland"],
  ["FOK", "Coroa das Ilhas Faroé"],
  ["GBP", "Libra Esterlina"],
  ["GEL", "Lari georgiano"],
  ["GGP", "Libra de Guernsey"],
  ["GHS", "Cedi Ganense"],
  ["GIP", "Libra de Gibraltar"],
  ["GMD", "Gambiano Dalasi"],
  ["GNF", "Franco Guineense"],
  ["GTQ", "Quetzal guatemalteco"],
  ["GYD", "Dólar Guianense"],
  ["HKD", "Dólar de Hong Kong"],
  ["HNL", "Lempira Hondurenha"],
  ["HRK", "Kuna Croata"],
  ["HTG", "Gourde Haitiano"],
  ["HUF", "Forint Húngaro"],
  ["IDR", "Rupia Indonésia"],
  ["ILS", "Novo Shekel israelense"],
  ["IMP", "Libra Manx"],
  ["INR", "Rúpia Indiana"],
  ["IQD", "Dinar Iraquiano"],
  ["TIR", "Rial iraniano"],
  ["ISK", "Coroa Islandesa"],
  ["JEP", "Jersey Pound"],
  ["JMD", "Jamaicano Dólar"],
  ["JOD", "Dinar Jordaniano"],
  ["JPY", "Iene Japonês"],
  ["KES", "Xelim Queniano"],
  ["KGS", "Som do Quirguistão"],
  ["KHR", "Riel Cambojano"],
  ["KID", "Dólar Kiribati"],
  ["KMF", "Franco Comoriano"],
  ["KRW", "Won sul-coreano"],
  ["KWD", "Dinar do Kuwait"],
  ["KYD", "Dólar das Ilhas Cayman"],
  ["KZT", "Tenge do Cazaquistão"],
  ["LAK", "Lao Kip"],
  ["LBP", "Libra Libanesa"],
  ["LKR", "Rúpia do Sri Lanka"],
  ["LRD", "Dólar Liberiano"],
  ["LSL", "Lesoto Loti"],
  ["LYD", "Dinar Líbio"],
  ["MAD", "Dirham marroquino"],
  ["MDL", "Leu da Moldávia"],
  ["MGA", "Ariary malgaxe"],
  ["MKD", "Denar Macedônio"],
  ["MMK", "Kyat birmanês"],
  ["MNT", "Tögrög da Mongólia"],
  ["MOP", "Pataca Macaense"],
  ["MRU", "Ouguiya mauritano"],
  ["MUR", "Rúpia das Maurícias"],
  ["MVR", "Rufiyaa das Maldivas"],
  ["MWK", "Kwacha do Malawi"],
  ["MXN", "Peso Mexicano"],
  ["MYR", "Ringgit da Malásia"],
  ["MZN", "Metical Moçambicano"],
  ["NAD", "Dólar da Namíbia"],
  ["NGN", "Naira Nigeriana"],
  ["NIO", "Córdoba Nicaraguense"],
  ["NOK", "Coroa Norueguesa"],
  ["NPR", "Rúpia Nepalesa"],
  ["NZD", "Dólar da Nova Zelândia"],
  ["OMR", "Rial de Omã"],
  ["PAB", "Balboa panamenho"],
  ["PEN", "Sol Peruano"],
  ["PGK", "Kina da Papua Nova Guiné"],
  ["PHP", "Peso Filipino"],
  ["PKR", "Rúpia Paquistanesa"],
  ["PLN", "Złoty polonês"],
  ["PYG", "Guarani paraguaio"],
  ["QAR", "Rial do Catar"],
  ["RON", "Leu romeno"],
  ["RSD", "Dinar Sérvio"],
  ["RUB", "Rublo Russo"],
  ["RWF", "Franco Ruandês"],
  ["SAR", "Rial Saudita"],
  ["SBD", "Dólar das Ilhas Salomão"],
  ["SCR", "Rúpia Seychellois"],
  ["ODS", "Libra Sudanesa"],
  ["SEK", "Coroa Sueca"],
  ["SGD", "Dólar de Singapura"],
  ["SHP", "Libra de Santa Helena"],
  ["SLE", "Serra Leoa Leoa"],
  ["SLL", "Serra Leoa Leoa"],
  ["SOS", "Xelim Somali"],
  ["SRD", "Dólar do Suriname"],
  ["SSP", "Libra do Sudão do Sul"],
  ["STN", "São Tomé e Príncipe Dobra"],
  ["SYP", "Libra Síria"],
  ["SZL", "Eswatini Lilangeni"],
  ["THB", "Baht tailandês"],
  ["TJS", "Somoni tadjique"],
  ["TMT", "Turquemenistão Manat"],
  ["TND", "Dinar Tunisino"],
  ["TOP", "Pa'anga de Tonga"],
  ["TRY", "Lira Turca"],
  ["TTD", "Dólar de Trinidad e Tobago"],
  ["TVD", "Dólar Tuvaluano"],
  ["TWD", "Novo Dólar Taiwanês"],
  ["TZS", "Xelim da Tanzânia"],
  ["UAH", "Hryvnia Ucraniana"],
  ["UGX", "Xelim de Uganda"],
  ["USD", "Dólar dos Estados Unidos"],
  ["UYU", "Peso Uruguaio"],
  ["UZS", "Uzbequistão So'm"],
  ["VES", "Bolívar Soberano venezuelano"],
  ["VND", "Vietnamita Đồng"],
  ["VUV", "Vanuatu Vatu"],
  ["WST", "Samoano Tālā"],
  ["XAF", "Franco CFA da África Central"],
  ["XCD", "Dólar do Caribe Oriental"],
  ["XDR", "Direitos de Saque Especiais"],
  ["XOF", "Franco CFA da África Ocidental"],
  ["XPF", "Franco CFP"],
  ["YER", "Rial Iemenita"],
  ["ZAR", "Rand Sul-africano"],
  ["ZMW", "Kwacha zambiano"],
  ["ZWL", "Dólar do Zimbábue"],
];

/*
  The following lines of code extract the currency names and
  put then in alphabetical order and assign then to a new array
  that will be used to set the 'option' elements values
*/

const currencyNames = [];
for (let i = 0; i < supportedCurrencies.length; i++) {
  currencyNames.push(supportedCurrencies[i][1]);
}
currencyNames.sort();

// select elements selection
let currencyNameMain = document.querySelector(".currency-name-main");
let currencyNameOne = document.querySelector(".currency-name-one");
let currencyNameTwo = document.querySelector(".currency-name-two");
let currencyNameThree = document.querySelector(".currency-name-three");
// input elements selection
let currencyInputMain = document.querySelector(".currency-input-main");
let currencyInputOne = document.querySelector(".currency-input-one");
let currencyInputTwo = document.querySelector(".currency-input-two");
let currencyInputThree = document.querySelector(".currency-input-three");
// All select and input elements
let currencySelectElements = document.querySelectorAll("select");
let rateInputElements = document.querySelectorAll(".rate-input");
let optionElements = document.querySelectorAll("option");

// ExchangeRate-API
const API_URL = "https://api.exchangerate-api.com/v4/latest/";

// Fetching the API
const getCurrencyData = async (code, rate) => {
  try {
    const res = await fetch(`${API_URL}${code.toUpperCase()}`);
    const data = await res.json();
    const exchangeRate = data.rates[rate];
    return exchangeRate;
  } catch (err) {
    console.log("Could not fetch currency data!", err);
  }
};

// Set the currency names to the option elements, their ids and values
const setCurrencyNames = () => {
  for (let curName of currencyNames) {
    let code = "";
    for (let i = 0; i < supportedCurrencies.length; i++) {
      if (supportedCurrencies[i][1] === curName) {
        code = supportedCurrencies[i][0];
      }
    }
    currencySelectElements.forEach((selectEl) => {
      selectEl.innerHTML += `<option id=${code} value=${code} >${curName}</option>`;
    });
  }
};
setCurrencyNames();

// Set the initial values for the inputs
currencyNameMain.value =
  currencyNameMain.value !== "BRL" ? "BRL" : setCurrencyNames();
currencyNameOne.value =
  currencyNameOne.value !== "USD" ? "USD" : setCurrencyNames();
currencyNameTwo.value =
  currencyNameTwo.value !== "EUR" ? "EUR" : setCurrencyNames();
currencyNameThree.value =
  currencyNameThree.value !== "GBP" ? "GBP" : setCurrencyNames();

// Set the currency values for the inputs
const setCurrencyValues = async () => {
  const currencyRates = [];
  // Get the rate values for inputs except main input
  for (let selectEl of currencySelectElements) {
    if (selectEl !== currencyNameMain) {
      currencyRates.push(
        Number(
          await getCurrencyData(currencyNameMain.value, selectEl.value)
        ).toFixed(2)
      );
    }
  }
  // Set the rate values for the rate inputs
  for (let i = 0; i < currencyRates.length; i++) {
    rateInputElements[i].value = Number(
      currencyRates[i] * currencyInputMain.value
    ).toFixed(2);
  }
};
setCurrencyValues();

// Updates the currency values
const updateCurrencyValues = () => {
  // Set the rate values based on the dropdown selection
  currencySelectElements.forEach((selectEl) => {
    selectEl.addEventListener("change", (e) => {
      selectEl.value = e.target.value;
      setCurrencyValues();
    });
  });

  // Update values when a new one is typed in the 'currencyInputMain' element
  currencyInputMain.addEventListener("input", async (e) => {
    currencyInputMain.value = Number(e.target.value) || "";
    setCurrencyValues();
  });
};
updateCurrencyValues();
