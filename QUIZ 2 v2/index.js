const { Builder, By, Key, util } = require("selenium-webdriver");

async function testCase() {
  //buka browser
  let driver = await new Builder().forBrowser("chrome").build();
  let assert = require("assert");
  // buka url google
  try {
    await driver.get("https://demo.1crmcloud.com/login.php");
    // await driver.findElement(By.linkText("3. Add a User")).click();
    await driver.findElement(By.id("login_user")).sendKeys("admin");
    await driver.findElement(By.id("login_pass")).sendKeys("admin", Key.RETURN);
    await driver.sleep(5000);
    await driver.findElement(By.className("default-avatar")).click();
    const text = await driver.findElement(By.xpath("/html/body/div[7]/div/div[3]/div/form/div[2]/div/div/div[2]/div/div[1]/div[1]/h3")).getText();
    assert.equal(text, "Administrator", "Tes Fail");
    console.log("Test Success");
   }
   catch(error) {
    console.log("Test Fail");
   }
  
}

testCase();
