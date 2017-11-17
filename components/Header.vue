<template>
  <header>
    <nav class="navbar navbar-default active">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <nuxt-link  to="/" tag="a" class="navbar-brand"  title="">
            <img src="/images/essencial_logo.png" class="navbar-logo-img" style="margin-right: 10px" alt="">
             ESSENCIAL
          </nuxt-link >
        </div>

        <div class="collapse navbar-collapse" id="navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <nuxt-link  to="/" tag="li" href="#"><a>Início</a></nuxt-link >
            <nuxt-link  to="/servicos" tag="li" href="#"><a>Serviços</a></nuxt-link >
            <li>
              <p class="hidden">
                <a href="./components.html" class="btn btn-default navbar-btn" title="">Components</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>
