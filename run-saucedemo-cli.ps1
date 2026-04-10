Set-Location "$PSScriptRoot"

npx playwright-cli open https://www.saucedemo.com/
npx playwright-cli fill "input[data-test='username']" "standard_user"
npx playwright-cli fill "input[data-test='password']" "secret_sauce"
npx playwright-cli click "input[data-test='login-button']"
npx playwright-cli snapshot
