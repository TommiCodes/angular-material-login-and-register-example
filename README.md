# angular-material-login-and-register-example

## How to run
First run `npm i` and then `ng serve`, then you can open localhost:4200 in your Browser

### Commands/Cli Commands that were used to generate this project
With the Angular CLI we can generate Angular Scaffolds with just one specific command. e.g. generate a component, a module, or a service

Let the Angular CLI generate the angular starter for you  
`ng new login-and-register-example`  

add angular Material to your Angular app  
`ng add @angular/material`
  
Generate the modules Public, Private and Shared  
`ng g module public`  
`ng g module private`  

generate proxy file to proxy/rewrite the `/api` requests
create file proxy.conf.json and add the config details
then add it to the angular json under projects....serve.development.proxyConfig...
