import {expect, test} from "@playwright/test";

test ("handling dropdown", async ({page}) =>{



    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    console.log(page.url());

  /* const [newWindow]= await Promise.all([
        page.waitForEvent("popup"),
        page.click("'  Follow On Twitter '")
    ]);

    console.log(newWindow.url());
*/

const [multiPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("#followboth")
])
const pages=multiPage.context().pages();
console.log("pages length " + pages.length);



})