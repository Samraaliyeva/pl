import {expect, test} from "@playwright/test";

test ("handling dropdown", async ({page}) =>{

await page.goto("https://letcode.in/frame");



const allframes = page.frames();

console.log("number of frames: " + allframes.length);

const frame = page.frameLocator("#firstFr");

await frame.locator("input[name='fname']").fill( "Samra");
await frame.locator("input[name='lname']").fill( "Aliyeva");

const innerFrame=frame.frameLocator("iframe[src='innerFrame']");

innerFrame.locator("input[name='email']").fill("Samra@gmail.com");

await frame.locator("input[name='fname']").fill( "Skyline");

/*
const myFrame= page.frame("firstFr");

await myFrame?.fill("input[name='fname']", "Samra");

await myFrame?.fill("input[name='lname']", "Aliyeva");

await page.waitForTimeout(3000);

expect(await myFrame?.locator("p[class='title has-text-info']").textContent()).toContain("You have entered Samra Aliyeva");

*/
})