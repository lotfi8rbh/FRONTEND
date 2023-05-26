import React from 'react';
export default function ForgetPwd() {
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          Medicall
        </a>
        <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h1 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Vous-Avez oublié votre mot de passe ?
          </h1>
          <p class="font-light text-gray-500 dark:text-gray-400"> Tappez votre email nous vous enverrons un code pour la réinitialisation de votre mot de passe </p>
          <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre email</label>
              <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="exemple@mail.com" required="" />
            </div>
            <div class="flex items-start">
            </div>
            <button type="submit" class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-50 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Réinitialiser le mot de passe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
