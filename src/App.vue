<template>
  <div id="app">
    <nav class="nav">
      <ul>
        <li class="nav__item nav__logo">
          <router-link to="/" exact>
            <img src="https://www.instagram-brand.com/img/instagram/logo.instagram.png" style="filter: invert(100%);">
          </router-link>
        </li>
        <!-- <li class="nav__item"><router-link to="/search">Search</router-link></li> -->
      </ul>
    </nav>
    <router-view class="view"></router-view>
  </div>
</template>

<style lang="sass">
  body {
    font-family: Helvetica, sans-serif;
    padding: 0;
    margin: 0;
    background-color: #fafafa;
  }
  .router-link-active{
    color: red ;
  }
  * {    box-sizing: border-box; }
  .nav {
    & {
      box-shadow: 0px 6px 9px rgba(0,0,0,0.03);
      position: fixed;
      z-index: 1;
      padding: 17px 40px;
      width: 100%;
      background-color: #FFF;
      border-bottom: 1px solid rgba(0,0,0,.0975);
    }
    &__logo {
      & {
        max-width: 176px;
      }
      & img {
        width: 100%;
      }
    }
    &__item {
      display: inline-block;
    }
  }
  .view {
    padding-top: 83px;
  }
  ul {
    padding: 0;
    margin: 0;
  }
</style>
