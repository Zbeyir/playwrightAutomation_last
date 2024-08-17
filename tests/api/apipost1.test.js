const { test, expect } = require('@playwright/test');

test('API POST request on persis.de', async ({ request }) => {

    // Senden einer POST-Anfrage an die angegebene URL
  const response = await request.post('https://www.persis.de/wp-json/skcl-coxljn-ieprev/w1/dupsenc/0b62a00911974ce04/clear?_method=DELETE&_v=4.7.8&_locale=user&cookies=8319%2C8320');
  
  // Überprüfen des HTTP-Statuscodes der Antwort
  expect(response.status()).toBe(200);

    // Parsen des Antwortkörpers als JSON
  const responseBody = await response.json();
  
    // Ausgabe des JSON-Antwortkörpers zur Konsole
  console.log(JSON.stringify(responseBody, null, 2));

  



  });
