<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.el-dialog__body{
  background-image: url("/img/fondo_dialog.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  color: #fff !important;
}
.el-dialog__header .el-dialog__title{
  text-shadow: gray 2px 2px 2px; 
  font-weight: 900;
  font-size: 2rem;
   font-family: 'Noto Sans', sans-serif;
}
</style>
