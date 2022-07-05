<template>
	<b-container fluid class="p-0">
		<b-container fluid class="bg-image d-flex align-items-center">
			<b-row>
				<b-col>
					<HelloWorld msg="¿EN BUSCA DE ALGO NUEVO?" />
				</b-col>
			</b-row>
		</b-container>
		<b-container class="form-box">
			<b-row>
				<b-col cols="12">
					<b-form inline>
						<b-form-input
							id="inline-form-input-name"
							class="mb-2 mr-sm-2 mb-sm-0"
							placeholder="Ciudad de origen"
						></b-form-input>

						<b-form-input
							id="inline-form-input-name"
							class="mb-2 mr-sm-2 mb-sm-0"
							placeholder="Ciudad de destino"
						></b-form-input>

						<b-form-datepicker
							id="datepicker-placeholder-1"
							placeholder="Fecha de salida"
							locale="en"
						></b-form-datepicker>

						<b-form-datepicker
							id="datepicker-placeholder-2"
							placeholder="Fecha de retorno"
							locale="en"
						></b-form-datepicker>

						<b-button variant="success" pill class="px-4" @click="GoToHome">Buscar vuelos
							<b-icon icon="chevron-right"></b-icon>
						</b-button>
					</b-form>
				</b-col>
			</b-row>
		</b-container>
	</b-container>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '../components/HelloWorld.vue'

	export default {
		name: 'Home',
		components: {
			HelloWorld
		},
		methods: {
			GoToHome() {
				this.$router.push({ path: '/tickets' })
			}
		}
	}
</script>

<style scoped>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	.bg-image {
		background-image: url('../assets/slider_bg01.jpg');
		height: 500px;
	}
	.form-inline {
		justify-content: space-between;
	}
	.form-box {
		background: #f1f1f2;
		padding: 4rem 2rem;
		margin-top: -3%;
		border-radius: 10px;
	}
</style>
