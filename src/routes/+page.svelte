<script lang="ts">
	import { cached } from '../lib';

	const time = cached(Date.now(), async () => {
    const now = new Date();

		return Number(now);
	}, 1000);
</script>

<h1>Time cached is</h1>
<p>{new Date($time)}</p>
