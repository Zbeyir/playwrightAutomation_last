const { test, expect } = require('@playwright/test');

test('API GET request', async ({ request }) => {

  // Senden einer GET-Anfrage an die angegebene URL
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  // Überprüfen des HTTP-Statuscodes der Antwort
  await expect.soft(response.status()).toBe(200);

  // Parsen des Antwortkörpers als JSON
  const responseBody = await response.json();

  // Überprüfen, ob der Antwortkörper den erwarteten JSON-Daten entspricht
  await expect.soft(responseBody).toEqual({
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  });
});

