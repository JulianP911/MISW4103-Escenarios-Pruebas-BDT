var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');

Given('I go to losestudiantes home screen', () => {
  browser.url('/uniandes/');
  if($('button=Cerrar').isDisplayed()) {
    $('button=Cerrar').click();
  }
});

When('I open the login screen', () => {
  $('button.loginButton=Log in').waitForExist(5000);
  $('button.loginButton=Log in').waitForDisplayed(10000);
  $('button.loginButton=Log in').click();
});

When('I open the sign up screen', () => {
  $("a=Regístrate").click();
});

When(/^I fill with (.*) and (.*)$/ , (email, password) => {
    var mailInput = $('input[name="email"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = $('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password)
});

When(/^I fill sign up form with (.*) (.*) (.*) (.*) and (.*)$/ , (name, lastname, email, password, repeatpassword) => {
    var nameInput = $('input[name="firstname"]');
    nameInput.click();
    nameInput.keys(name);

    var lastnameInput = $('input[name="lastname"]');
    lastnameInput.click();
    lastnameInput.keys(lastname)

    var emailInput = $('input[name="email"]');
    emailInput.click();
    emailInput.keys(email)

    var passwordInput = $('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password)

    var passwordInput = $('input[name="password2"]');
    passwordInput.click();
    passwordInput.keys(repeatpassword)

    var acceptInput = $('input[name="accept"]');
    acceptInput.click();
});

When('I try to login', () => {
  $('button=Ingresar').waitForExist(5000);
  $('button=Ingresar').waitForDisplayed(10000);
  $('button=Ingresar').click();
});


When('I try to sign up', () => {
  $('button=Registrarse').waitForExist(5000);
  $('button=Registrarse').waitForDisplayed(10000);
  $("button=Registrarse").click();
});

Then('I expect to see {string}', error => {
    $('.notice.alert.alert-danger').waitForDisplayed(5000);
    var alertText = browser.$('.notice.alert.alert-danger').getText();
    expect(alertText).to.include(error);
});

Then('I expect to sign up', () => {
  $('h2.swal2-title=¡Inscripción exitosa!').waitForDisplayed(10000);
  $('button.swal2-confirm=OK').waitForDisplayed(10000);
  $('button.swal2-confirm=OK').click();
})

Given('I expect to log out', () => {
    $('button.loginButton=Salir').waitForDisplayed(10000);
    $('button.loginButton=Salir').click();
})