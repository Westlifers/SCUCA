<template>
  <div class="main-wrapper">
    <div class="banner-area">
			<div class="container">
				<div class="row justify-content-center generic-height align-items-center">
					<div class="col-lg-8">
						<div class="banner-content text-center">
							<span class="text-white top text-uppercase"></span>
							<h1 class="text-white text-uppercase">{{ title }}</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'NiceTitle',
  props: ['title'],
}
</script>
