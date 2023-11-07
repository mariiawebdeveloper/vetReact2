const {Builder, By, Key, until} = require('selenium-webdriver');

async function runTest() {
    // Створи екземпляр WebDriver
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Відкрий веб-сторінку
        await driver.get('http://localhost:3000/');

        // Приклади дій з елементами на сторінці
        await driver.findElement(By.linkText('Головна')).click();
        await driver.findElement(By.linkText('Чому ми')).click();
        await driver.findElement(By.linkText('Товари')).click();
        await driver.findElement(By.linkText('Про нас')).click();
        await driver.findElement(By.linkText('Контакти')).click();

        // Тестування ползунка на Головній сторінці
        await testSlider(driver, 'seek1');

        // Тестування ползунка на сторінці "Чому ми"
        await driver.findElement(By.linkText('Чому ми')).click();
        await testSlider(driver, 'seek1');

        // Тестування ползунка на сторінці "Товари"
        await driver.findElement(By.linkText('Товари')).click();
        await testSlider(driver, 'seek1');

        // Тестування ползунка на сторінці "Про нас"
        await driver.findElement(By.linkText('Про нас')).click();
        await testSlider(driver, 'seek1');

        // Тестування ползунка на сторінці "Контакти"
        await driver.findElement(By.linkText('Контакти')).click();
        await testSlider(driver, 'seek1');

        // Приклад зміни значення input range
        const fontSizeSlider = await driver.findElement(By.id('seek1'));
        await fontSizeSlider.sendKeys(Key.ARROW_RIGHT); // Імітація руху ползунка вправо

        // Приклад виконання кліка по кнопці
        const speakButton = await driver.findElement(By.css('.buttons'));
        await speakButton.click();

        // Приклад виконання подвійного кліка
        const magnifyButton = await driver.findElement(By.id('magnify'));
        await driver.executeScript("arguments[0].click();", magnifyButton);

        // Пауза перед кліком на чекбокс
        await driver.sleep(1000);

        // Приклад виконання кліка по чекбоксу
        const themeCheckbox = await driver.findElement(By.id('checkbox'));
        await driver.executeScript("arguments[0].click();", themeCheckbox);

        // Пауза для спостереження за результатами
        await driver.sleep(3000);
    } finally {
        // Закрий браузер після завершення тесту
        await driver.quit();
    }
}

async function testSlider(driver, sliderId) {
    // Приклад зміни значення input range
    const fontSizeSlider = await driver.findElement(By.id(sliderId));
    await fontSizeSlider.sendKeys(Key.ARROW_RIGHT); // Імітація руху ползунка вправо
    await driver.sleep(1000); // Пауза для спостереження за результатами
}

// Запусти тест
runTest();
