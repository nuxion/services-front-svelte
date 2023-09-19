<script>
	import Router, {location, link} from 'svelte-spa-router';
  import About from './pages/About.svelte';
  import Home from './pages/Home.svelte';
  import Blog from './pages/Blog.svelte';
</script>
<nav>
	<a  href="/">Home</a>
	<a href="/#/about">About</a>
	<a href="/#/blog/colors">Colors</a>
</nav>
<Router routes={{
	'/': Home,
	'/about': About,
	'/blog/:blogName': Blog,
}} />

<hr>
/#{$location}
