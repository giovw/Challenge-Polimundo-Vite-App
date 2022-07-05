<template>
	<div class="banner-top px-5">
		<h1>{{ msg }}</h1>
		<h4>Mas asientos y mejores precios.</h4>
		<b-button variant="light" class="mt-5 px-4" pill>Comprar ahora</b-button>
	</div>
</template>

<script>
	export default {
		props: {
			msg: String
		}
	}
</script>

<style scoped>
.banner-top {
  color: #ffffff;
}
</style>