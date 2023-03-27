import {expect, test} from "@playwright/test";

/*test ("Interactions with input", async ({page}) => {


    await page.goto("https://demoqa.com/login");

    await page.fill("//input[@id='userName']", "Skyline");

    await page.fill("//input[@id='password']", "Semra12!")

   await page.click("//button[@id='login']");

   await page.click("(//*[contains(text(),'Elements')])[2]");

   await page.click("(//li[@id='item-0'])[1]");

   const name= await page.locator("input#userName");

   await name.scrollIntoViewIfNeeded();

   console.log(await name.getAttribute("placeholder"));

   expect(name).toHaveAttribute("placeholder", "Full Name")

   console.log('Before entering data :' + await name.inputValue());

   await name.type("Samra");

   console.log('After entering data' + await name.inputValue());



})*/

/*test("Sum", async ({page}) => {

await page.goto("https://demoqa.com/login");

await page.fill("//input[@id='userName']", "Skyline");

await page.fill("//input[@id='password']", "Semra12!")

await page.click("//button[@id='login']");

await page.click("(//*[contains(text(),'Elements')])[2]");

await page.click("(//li[@id='item-0'])[1]");

await page.fill("//input[@id='userName']", "Samra Aliyeva");

const submit= page.locator("button#submit");


})*/

test ("alerts", async ({page}) => {
await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

page.on("dialog", async (alert) => {

    const text=  alert.defaultValue();

    console.log(text);
    await alert.accept("Samra");
})

await page.locator("button:has-text('Click Me')").nth(2).click();

//expect (page.locator("id=confirm-demo")).toContainText("Cancel");
expect (page.locator("id=prompt-demo")).toContainText("Sam");

await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
await page.click("(//button[text()='Launch Modal'])[1]");
await page.click("(//button[text()='Save Changes'])[1]")

})