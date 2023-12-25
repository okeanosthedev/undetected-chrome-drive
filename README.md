# Undetected-chrome-drive 4.3.0

A node module coded by a module in python (https://github.com/ultrafunkamsterdam/undetected-chromedriver) implementation javascript. Chromedriver patch which does not trigger anti-bot services like Distill Network / Imperva / DataDome / Botprotect.io Automatically downloads the driver binary and patches it.

Requirements:
Python 3.6++
NodeJs 14.x++
Undetected_chromedriver 3.5.4

Installation:
```
pip3 install undetected_chromedriver==3.5.4
```
or
```
pip install undetected_chromedriver==3.5.4
```
Then to install from npm
```
npm i undetected-chrome-drive@latest
```
Example Use:
```
const unchrome = require('undetected-chrome-drive')
// Main usage. You need to add driver into the global variables part else it wont work. Other are your choice to add, just add if you use them. After it the other two args are needed. First is the python command for program to work. (python or python3) Second is if you want it to run headless or not. (For running headless write "true" if you don't want headless mod write "false".)
unchrome.driver((driver, time, add) => {
// Imports the time module for use.
add.time
// After the launch of the driver opens the website that is written. (1 website at a time for now.)
driver.get("https://nowsecure.nl")
// Waits 10 seconds before continuing.
time.sleep(10)
// End the instance of the driver.
driver.close()
}, "python3", "true");

```
Extra Usage:
You can use these codes inside the driver.
```

// This saves a screenshot of the website you are trying to reach.

driver.save_screenshot('nowsecure.png')


// This executes a code that you can interact with the website you opened. Same as using console on a website to interact with it.

driver.execute_script(
     """
        let container = document.querySelector('#rso');
        let el = document.createElement('div');
        el.style = 'width:500px;display:block;background:red;color:white;z-index:999;transition:all 2s ease;padding:1em;font-size:1.5em';
        el.textContent = "Excluded from support...!";
        container.insertAdjacentElement('afterBegin', el);
        setTimeout(() => {
            el.textContent = "<<<  OH , CHECK YOUR CONSOLE! >>>"}, 2500)
"""
)
```

I always welcome contritubers.

Discord: `__okeanos__`

Mail: help@uptimefactory.cf

Github: https://github.com/denene12/undetected-chrome-drive
