<template>
  <div class="app-container">
    <nuxt />
  </div>
</template>

<style>
html, body {
	height: 100%;
}
body{
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
	font-size: 21px;
	line-height:  1.4;
	font-weight: regular;
    margin: 0;
    -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #333333;
}


*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

h1, h2, h3, h4, h5, h6,
p, a {
	font-size: 21px;
	line-height:  1.4;
	font-weight: regular;
}

a {
    color: #444444;
    text-decoration: none;

    &:hover{
        color: #333333;
    }
}

.small-text{
	font-size: var(--font-size-small);
}


button:focus {
    outline: none!important;
    border: none;
}


/* Page transitions */

.page-enter-active, .page-leave-active {
 	transition: opacity .5s
}
.page-enter, .page-leave-active {
  opacity: 0;
}

</style>
