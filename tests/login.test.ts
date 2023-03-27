
import { chromium, test } from "@playwright/test"

test("login test demo" , async () => {

const browser=await chromium.launch();

const context=await browser.newContext();

const page= await context.newPage();

await page.goto("https://demoqa.com/login");

await page.fill("//input[@id='userName']", "Skyline");

await page.fill("//input[@id='password']", "Semra12!")

await page.click("//button[@id='login']");

await page.click("(//*[contains(text(),'Elements')])[2]");

await page.click("(//li[@id='item-0'])[1]");

await page.fill("//input[@id='userName']", "Samra Aliyeva");

await page.click("(//li[@id='item-1'])[1]");

await page.click("(//span[@class='rct-checkbox'])[1]");

await page.click("(//li[@id='item-2'])[1]");

await page.click("(//label[@class='custom-control-label'])[2]");

await page.click("(//li[@id='item-3'])[1]");
})
