import {test} from "@playwright/test";

test ("handling dropdown", async ({page}) =>{


    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");

    await newFunction("India");
    await newFunction("Denmark");


  //  await page.selectOption("#select-demo", {
   //     label: "Tuesday"
   // })

    await page.waitForTimeout(3000);


    async function newFunction(countryName) {
        await page.click("#country+span");
        await page.locator("ul#select2-country-results").locator("li", {
            hasText: "India"
        }).click();
    }
})