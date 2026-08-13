const puppeteer = require('puppeteer');
const path = require('path');

async function render(browser, file, out, w, h) {
  const page = await browser.newPage();
  await page.setViewport({ width: w, height: h, deviceScaleFactor: 3 });
  await page.goto('file:///' + path.resolve(__dirname, file).replace(/\\/g, '/'), { waitUntil: 'networkidle0', timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 1200));

  await page.screenshot({ path: path.join(__dirname, out), clip: { x: 0, y: 0, width: w, height: h } });

  const pdfOut = out.replace(/\.png$/, '.pdf');
  await page.pdf({
    path: path.join(__dirname, pdfOut),
    width: w + 'px',
    height: h + 'px',
    printBackground: true,
    preferCSSPageSize: true
  });

  await page.close();
  console.log('saved ' + out + ' + ' + pdfOut);
}

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-gpu', '--force-device-scale-factor=3']
  });
  await render(browser, 'poster.html', 'Aniicone_Poster.png', 1080, 1500);
  await render(browser, 'poster_mobile.html', 'Aniicone_Poster_Mobile.png', 1080, 1920);
  await browser.close();
  console.log('done');
})().catch(e => { console.error(e); process.exit(1); });
