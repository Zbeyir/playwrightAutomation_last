const { test, expect } = require('@playwright/test');

test('API GET request on persis.de', async ({ request }) => {

    // Senden einer GET-Anfrage an die angegebene URL
  const response = await request.get('https://www.persis.de/wp-json/contact-form-7/v1/contact-forms/5/feedback/schema');
 
    // Überprüfen des HTTP-Statuscodes der Antwort
  expect(response.status()).toBe(200);

    // Parsen des Antwortkörpers als JSON
  const responseBody = await response.json();
  
    // Ausgabe des JSON-Antwortkörpers zur Konsole
  console.log(JSON.stringify(responseBody, null, 2));

    // Suchen nach der Regel für das Feld "menu-146" und die Regel "required"
  const requiredRule = responseBody.rules.find(rule => rule.field === 'menu-146' && rule.rule === 'required');
  
    // Überprüfen, ob die Regel definiert ist
  expect(requiredRule).toBeDefined();
 
   // Überprüfen der Fehlermeldung der Regel
  expect(requiredRule.error).toBe("Dies ist ein Pflichtfeld.");




  });

  