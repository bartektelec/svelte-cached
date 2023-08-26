<div align="center">

# 🖍️svelte-cached-store

[Live Demo](https://bartektelec.github.io/svelte-cached-store/)

A simplified store for storing cached data.
Useful for data that needs to keep in sync with it's source.

[![release version](https://img.shields.io/npm/v/svelte-cached-store)](https://www.npmjs.com/package/svelte-cached-store) [![weekly download count](https://img.shields.io/npm/dm/svelte-cached-store)](https://npmcharts.com/compare/svelte-cached-store?interval=30&minimal=true) ![primary language procentage](https://img.shields.io/github/languages/top/bartektelec/svelte-cached-store) ![workflow build status](https://img.shields.io/github/actions/workflow/status/bartektelec/svelte-cached-store/npm-publish.yml) ![last commit badge](https://img.shields.io/github/last-commit/bartektelec/svelte-cached-store) [![licence badge](https://img.shields.io/npm/l/svelte-cached-store)](https://github.com/bartektelec/svelte-cached-store/blob/main/LICENSE)

</div>
<hr />

## Install

```sh
npm install svelte-cached-store
```

## Usage

```ts
import { cached } from 'svelte-cached-store';
```

Set the initial value for the store.
To keep the store in sync with it's source, provide a retrieve async function as the second argument.

TTL is set as third argument, if not provided you will need to manually call `store.retrieve()` function whenever you want to sync the state.

```ts
const getLatestBitcoinPrice = async () => {
  const response = await fetch(...);
  // ...
  return price;
};

// get a fresh price every 5 seconds
const btcPrice = cached(0, getLatestBitcoinPrice, 5000);
```

Use the cached store instance just like any other Svelte store.

```svelte
<p>Current BTC price:{$btcPrice}</p>
```

## Licence

[MIT](https://opensource.org/licenses/MIT)
