
const puppeteer = require('puppeteer');

 // SCRAPING FOR OG META TAGS  (but right now just using dummy url and el)
 const scrapper = async function scrapeProduct(url){
    
    const browser = await puppeteer.launch();
    const page = await  browser.newPage();
    await page.goto(url)

    const [el] = await page.$x('//*[@id="mw-content-text"]/div[1]/table[1]/tbody/tr[2]/td/a/img')
    const src = await el.getProperty('src')
    const srcTxt = await src.jsonValue();
    console.log({srcTxt})

    browser.close()

    console.log('hello world')

    // returns scrapper as a middleware function for express router
    return scrapper('https://en.wikipedia.org/wiki/Ariana_Grande');
    
};


module.exports = scrapper;
