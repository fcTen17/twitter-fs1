import {createUser, signInUser, authenticate} from '@src/requests'


$(".static_pages.home").ready(function(){

  console.log('Hello from home');

    //------------------ authenticate and redirect ---------------------
  
    function authenRedirect() {
      authenticate(function(response) {
        if(response.authenticated) {
          window.location.replace("/feeds");
        }
      });
    };
  
    //------------------- Sign up / Log in Buttons ---------------------
  
    $(document).on('click', '#sign-up-btn', function(e){
      e.preventDefault();
      var usernameInput = $('.sign-up .username').val();
      var emailInput = $('.sign-up .email').val();
      var passwordInput = $('.sign-up .password').val();
      createUser(usernameInput, emailInput, passwordInput, function(){
        signInUser(usernameInput, passwordInput, function(){
          authenRedirect();
        });
      });
    });
  
    $(document).on('click', '#log-in-btn', function(e){
      e.preventDefault();
      var usernameInput = $('.log-in .username').val();
      var passwordInput = $('.log-in .password').val();
      signInUser(usernameInput, passwordInput, function(){
        authenRedirect();
      });
    });  
});