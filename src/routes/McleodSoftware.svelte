<script lang="ts">
	import { fade } from 'svelte/transition';
	export let debugIntern: boolean;
</script>

<div class="ml-2" in:fade>
	<div class="flex">
		<h4 id="About" class="h4 font-semibold pb-2">Data Engineer&nbsp;</h4>
		<h4 id="" class="h4 font-semibold pb-2 text-primary-500">@ Mcleod Software</h4>
	</div>
	<h6 id="" class="h6 pb-2 text-surface-100">Dec. 2022 - Current</h6>

	<ul class="marker:text-primary-500 list-disc list-outside">
		<li>
			<p class="flex-auto pb-2">
				Integrated custom RESTlet APIs in NetSuite; used in analysis of $300,000,000+ in
				transactions
			</p>
		</li>
		<li>
			<p class="flex-auto pb-2">
				Established new standards for data governance, securing enterprise data in a data warehouse
			</p>
		</li>
		<li class="">
			<p class="flex-auto pb-2">
				Developed a python package to handle interfacing with Lansweeper’s API, then modeled
				installed software over time - aiding in fulfilling SOC-2 compliance standards
			</p>
		</li>
	</ul>

	{#if !debugIntern}
		<!-- Intern -->
		<hr class="pb-2" />
		<div class="flex">
			<h4 id="About" class="h4 font-semibold pb-2 md:h5">Data Scientist (Intern)&nbsp;</h4>
			<h4 id="" class="h4 font-semibold pb-2 text-primary-500 md:h5">@ Mcleod Software</h4>
		</div>
		<h6 id="" class="h6 pb-2 text-surface-100">May 2022 - Dec. 2022</h6>

		<ul class="marker:text-primary-500 list-disc list-outside">
			<li>
				<p class="flex-auto pb-2">
					Designed Power BI dashboards addressing $2,000,000+, influencing internal expenditures
				</p>
			</li>
			<li>
				<p class="flex-auto pb-2">
					Constructed internal tools utilizing many SDKs and APIs to clean, transform, and push data
					to a newly constructed MSSQL database for further mining and analysis as a Power BI
					dashboard
				</p>
			</li>
		</ul>
	{/if}
</div>
