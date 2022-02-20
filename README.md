# angular-material-login-and-register-example

## How to run
First run `npm i` and then `ng serve`, then you can open localhost:4200 in your Browser

### Hints
Proxy:  
With a proxy file you can proxy/rewrite your api calls against your backend.
Currently there is a file under /src/proxy.conf.json (and it is added in angular.json)
with some config details, since there is no backend running, the requests will fail - it's your turn to build the backend :)

Jwt:  
The @auth0/angular-jwt is added and with the login request the jwt is stored in the local storage.
The package adds then the jwt to every request to the backend automatically via an interceptoer, so the fe/the user is 
always authenticated against the backend.

### Next Steps for you
Add a real backend and replace the placeholders

### Next steps for me
- add a form to reset the password

### Commands/Cli Commands that were used to generate this project 
With the Angular CLI we can generate Angular Scaffolds with just one specific command. 
e.g. generate a component, a module, or a service

Let the Angular CLI generate the angular starter for you  
`ng new login-and-register-example`  

add angular Material to your Angular app  
`ng add @angular/material`
  
Generate the modules Public, Private and Shared  
`ng g module public`  
`ng g module private`  

Generate the components  
`ng g c public/login`  
`ng g c public/register`  
`ng g c protected/dashboard`  

Generate the "fake" Service  
`ng g s public/auth`

Add an angular jwt package, for handling the jwt, the login etc.
`npm i @auth0/angular-jwt`

Add the Auth guard, to make sure only LoggedIn Users can access the Protected Module
`ng g g Auth`  
then implement the CanActivate interface