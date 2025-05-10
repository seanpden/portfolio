<script lang="ts">
	import Group from '../components/Group.svelte';
</script>

<Group
	group="main"
	class="col-auto w-full justify-start justify-self-center overflow-y-auto"
	content_class="w-full flex-col text-left"
>
	<div class="self-start font-bold underline">
		<h1 id="about">{'About'}</h1>
	</div>
	<div class="flex flex-col self-start">
		<p>
			During my childhood, I stumbled upon a C++ book in my father's office—an early encounter that
			ignited my belief in the power of software and data to solve any problem. Since then, I've had
			the privilege of working with a
			<a class="hover:anchor font-bold" href="https://us.budweiser.com/"
				>major distribution company</a
			>
			as a support specialist, graduating with a degree in Computer Science from an oustanding
			<a class="hover:anchor font-bold" href="https://www.uab.edu/home/">R1 research university</a>,
			building data-intensive applications and statistical models for America's leading
			<a class="hover:anchor font-bold" href="https://www.mcleodsoftware.com/"
				>trucking software company</a
			>, and building software solutions for my own clients.
		</p>
		<p>
			I am dedicated to advancing my education and knowledge while working as a data engineer. I am
			very proud to be currently enrolled in
			<a class="hover:anchor font-bold" href="https://www.gatech.edu/">a top 10 master's program</a>
			for Computer Science.
		</p>
		<p>
			When I'm not learning or working, you'll likely find me at the gym, catching up with friends,
			or immersed in the digital landscapes of
			<a class="hover:anchor font-bold" href="https://elderscrolls.bethesda.net/en">Tamriel</a>,
			seeking new adventures.
		</p>
	</div>

	<div class="self-start font-bold underline">
		<h1 id="experience">{'Experience'}</h1>
	</div>

	<div class="self-start">
		<h2 class="font-bold">{'Data Engineer @ Mcleod Software'}</h2>
		<h3 class="italic">{'Dec. 2022 - Current'}</h3>
		<ul class="list-inside list-disc">
			<li>
				Designed custom RESTlet APIs in NetSuite; used to analyze of $300,000,000+ in transactions.
			</li>
			<li>
				Deployed a distributed, scalable Dagster environment in Azure, orchestrating 100s of
				pipelines.
			</li>
			<li>
				Established data governance standards, securing 10+ TB of enterprise data in a data
				lakehouse.
			</li>
			<li>
				Developed a python package to interface with Lansweeper’s API, deployed an ETL process, then
				modeled installed software over time - aiding in fulfilling SOC-2 compliance standards.
			</li>
		</ul>
	</div>

	<div class="self-start">
		<h2 class="font-bold">{'Data Scientist @ Mcleod Software'}</h2>
		<h3 class="italic">{'May 2022 - Dec. 2022'}</h3>
		<ul class="list-inside list-disc">
			<li>
				Designed internal expenditure dashboards in Power BI, addressing $20,000,000+ in spending.
			</li>
			<li>
				Constructed internal tools utilizing many SDKs and APIs to extract, transform, and load data
				to a newly constructed MSSQL warehouse for further mining, analysis, and modeling.
			</li>
		</ul>
	</div>

	<div class="self-start">
		<h2 class="font-bold">{'IT Assistant @ Bama Budweiser'}</h2>
		<h3 class="italic">{'Nov. 2018 - Jan. 2019'}</h3>
		<ul class="list-inside list-disc">
			<li>Deployed a data collection solution for company distribution assets, saving $10,000+.</li>
			<li>
				Implemented a timely completion of warehouse-wide OS upgrades, impacting 30+ employees.
			</li>
		</ul>
	</div>

	<div class="self-start">
		<p>
			Access my full Resume
			<a class="hover:anchor font-bold" href="/">here</a>
			or from the left sidebar.
		</p>
	</div>

	<div class="self-start font-bold underline">
		<h1 id="project">{'Projects'}</h1>
	</div>

	<div class="self-start">
		<h2 class="font-bold">
			Diagnosing Acute Myeloid Leukemia with Supervised Machine Learning Algorithms
			<i class="nf nf-oct-link_external"></i>
		</h2>
		<h3 class="italic">{'python, numpy, pandas, sklearn'}</h3>
		<p>
			A machine learning model that can parse cytometry data and diagnose an individual with acute
			myeloid leukemia.
		</p>
	</div>

	<div class="self-start">
		<h2 class="font-bold">
			Drone Farming
			<i class="nf nf-oct-link_external"></i>
		</h2>
		<h3 class="italic">{'java, javafx, dji sdk'}</h3>
		<p>An autonomous drone that scans farmland and manages farming assets.</p>
	</div>

	<div class="self-start">
		<div class="self-start">
			<h2 class="font-bold">
				Epidemic Probability Simulator
				<i class="nf nf-oct-link_external"></i>
			</h2>
			<h3 class="italic">{'python, numpy'}</h3>
			<p>
				Full simulation of an epidemic amongst a population, complete with vaccination status,
				immunity chance, population density, and more.
			</p>
		</div>
	</div>

	<div class="self-start font-bold underline">
		<h1 id="contact">{'Contact'}</h1>
	</div>
	<div class="flex flex-col self-start">
		<p>Feel free to reach out to me! I'm always happy to hear from you.</p>
		<p>
			Contact me
			<a class="hover:anchor font-bold" href="/">here!</a>
		</p>
	</div>
</Group>
