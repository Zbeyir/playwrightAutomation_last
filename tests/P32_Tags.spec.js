
//Annotations
//https://playwright.dev/docs/test-annotations


import {test, expect} from '@playwright/test';

test('test1@sanity', async ({ page })=>{
    console.log('This is my tets 1.....')
});

test('test2@sanity', async ({ page })=>{
    console.log('This is my tets 2.....')
});

test('test3@reg', async ({ page })=>{
    console.log('This is my tets 3.....')
});

test('test4@reg', async ({ page })=>{
    console.log('This is my tets 4.....')
});

test('test5@sanity@reg', async ({ page })=>{
    console.log('This is my tets 5.....')
});

    //P32_Tags.spec.js

    //sadece @sanity ler calisacak 3 test yani
    // npx playwright test tests/P32_Tags.spec.js --project=chromium --headed --grep @sanity

    //sadece @reg ler calisacak 3 test yani
    // npx playwright test tests/P32_Tags.spec.js --project=chromium --headed --grep @reg

    //sadece @sanity@reg ler calisacak 1 test yani
    // npx playwright test tests/P32_Tags.spec.js --project=chromium --headed --grep @sanity@reg

    //!!!!***--> dikkat siralamayi yanlis yazar isen etts calismayacak

    //sadece @sanity ler calisacak 2 test yani
    // npx playwright test tests/P32_Tags.spec.js --project=chromium --headed --grep @sanity --grep-invert @reg

    //sadece @reg ler calisacak 2 test yani
    // npx playwright test tests/P32_Tags.spec.js --project=chromium --headed --grep @reg --grep-invert @sanity
