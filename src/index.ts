// otherModule.ts

import { getBrowser, getPage, close } from './core/puppeteerInstance';
import {getElementAndClick, randomWait} from "./utility/util";
import {XPaths} from "./utility/constants";

async function doAutomation() {
    const browser = await getBrowser();
    const page = await getPage();

    // Use the browser and page instances to perform your automation tasks
    await page.goto('https://www.instagram.com');

    await randomWait()

    await getElementAndClick(page,XPaths.acceptCookieButton)

}

// Call the function
doAutomation()
