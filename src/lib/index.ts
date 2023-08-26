import { writable } from 'svelte/store';

export const cached = <T>(
	initialValue: T,
	retrieveFn: () => Promise<T>,
	ttl?: number
) => {
	const store = writable<T>(initialValue);

	if (ttl) {
		let lastTimeout: NodeJS.Timeout;
		store.subscribe(() => {
			clearTimeout(lastTimeout);
			lastTimeout = setTimeout(() => {
				retrieveFn().then((d) => store.set(d));
			}, ttl);
		});
	}

	const retrieve = () => {
		retrieveFn().then((d) => store.set(d));
	};

	return {
		...store,
		retrieve,
	};
};
