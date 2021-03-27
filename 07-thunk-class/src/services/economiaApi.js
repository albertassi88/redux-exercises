export function fetchEconomia() {
    const fetchURL = 'https://economia.awesomeapi.com.br/json/all';
  
    return fetch(fetchURL)
      .then((resolve) => resolve.json())
      .then((date) => date);
}