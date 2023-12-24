const { python } = require("pythonia");
module.exports = async function driver(cmds, executer, head) {
  const unchromee = await python("./module.py");
  
  const callbackString = cmds.toString();
  
  const start = []
  
  const code_raw = callbackString.match(/\{([\s\S]*)\}/);
  
  const code_semi = code_raw && code_raw[1].trim();
  
  const lines = code_semi.split('\n');
  
  const code = lines.filter(line => !line.trim().startsWith('add.'));
  
  const import_matches = callbackString.match(/add\.[^\n]+/g);
  
  const import_matches_replace = import_matches.map(match => match.replace(/^add\./, 'import '));
  
  start.unshift('import undetected_chromedriver as uc')
  if(head == "true"){
    start.push('driver = uc.Chrome(headless=True)', 'from selenium.common.exceptions import WebDriverException', 'from selenium.webdriver.remote.webdriver import By', 'import selenium.webdriver.support.expected_conditions as EC', 'from selenium.webdriver.support.wait import WebDriverWait')
  } else {
    start.push('driver = uc.Chrome(headless=False)', 'from selenium.common.exceptions import WebDriverException', 'from selenium.webdriver.remote.webdriver import By', 'import selenium.webdriver.support.expected_conditions as EC', 'from selenium.webdriver.support.wait import WebDriverWait')
  }
  
  
  const middle = start.concat(import_matches_replace)
  
  const all = middle.concat(code)
  
  if (!all) {
  
    console.error("No driver commands found in the callback.");
  
    return [];
  
  }

  unchromee.dr(all, executer);
}







