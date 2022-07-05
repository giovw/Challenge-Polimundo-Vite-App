<template>
	<b-container fluid class="p-0 mb-5">
		<b-container class="bg-tickets">
			<b-row>
				<b-col>
					<h1 class="py-4 title-page">Resultados de la búsqueda.</h1>
				</b-col>
			</b-row>
			<b-card-group
				v-for="(ticketsSearch, index) in ticketsSearch"
				:key="index"
			>
				<b-card class="my-2">
					<b-card-text>
						<b-row>
							<b-col cols="4">
								<p class="titles">Aerolínea</p>
								<p class="aerolinea">{{ticketsSearch.aerolinea}}</p>
							</b-col>
							<b-col cols="2">
								<p class="titles"># de escalas</p>
								<p>{{ticketsSearch.scaled}}</p>
							</b-col>
							<b-col cols="3">
								<p class="titles">Duración del vuelo</p>
								<p>{{ticketsSearch.flightime}}</p>
							</b-col>
							<b-col cols="3">
								<p class="titles">Precio</p>
								<p class="price">${{ticketsSearch.price}}</p>
							</b-col>
						</b-row>
					</b-card-text>
				</b-card>
			</b-card-group>
		</b-container>
	</b-container>
</template>
<script>
	export default {
		name: 'TicketsPage',
		computed: {
			ticketsSearch() {
				return this.$store.state.tickets.ticketsData
			}
		}
	}
</script>

<style scoped>
	.bg-tickets {
		background: #f1f1f2;
		padding: 2rem;
	}
  .price {
    font-size: 1.25rem;
    font-weight: 500;
  }
  .aerolinea {
    font-weight: bold;
  }
  .titles {
    font-weight: bold;
    color: #427ead;
  }
  .title-page {
    color: #666666;
  }
</style>
