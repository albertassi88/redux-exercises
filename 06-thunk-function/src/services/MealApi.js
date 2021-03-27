export function fetchMeal() {
    const fetchURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  
    return fetch(fetchURL)
      .then((resolve) => resolve.json())
      .then((date) => date);
}

