<p align="center">
  <img alt="translate-api" src="https://user-images.githubusercontent.com/79005271/148122437-5d5242b5-40e1-4a49-87b6-e1c47308ce98.png">
</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/oJPBarbosa/translate-api.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/oJPBarbosa/translate-api.svg">
  <a href="https://github.com/oJPBarbosa/translate-api/commits">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/oJPBarbosa/translate-api.svg">
  </a>
  <img alt="GitHub" src="https://img.shields.io/github/license/oJPBarbosa/translate-api.svg">
</p>

## 🎯 About

A simple yet very useful S.O.L.I.D. principle-based web scraper API that uses [DeepL Translate](https://www.deepl.com/), extending its capacities.

<details>
  <summary>🌐 Supported Languages</summary>
  
  - 🇧🇬 Bulgarian
  - 🇨🇳 Chinese
  - 🇨🇿 Czech
  - 🇩🇰 Danish
  - 🇳🇱 Dutch
  - 🇺🇸 English
  - 🇪🇪 Estonian
  - 🇫🇮 Finnish
  - 🇫🇷 French
  - 🇩🇪 German
  - 🇬🇷 Greek
  - 🇭🇺 Hungarian
  - 🇮🇹 Italian
  - 🇯🇵 Japanese
  - 🇱🇻 Latvian
  - 🇱🇹 Lithuanian
  - 🇵🇱 Polish
  - 🇵🇹 Portuguese
  - 🇷🇴 Romanian
  - 🇷🇺 Russian
  - 🇸🇮 Slovenian
  - 🇸🇰 Slovak
  - 🇪🇸 Spanish
  - 🇸🇪 Swedish
</details>

## 🙋 Usage

📜 Check [languages.ts](https://github.com/oJPBarbosa/translate-api/src/utils/languages.ts) for the ISO 639-1 standard language codes.

### Request Example

#### Curl/Bash

```bash
curl -X POST http://translate.api.jpfb.me
  -H 'Content-Type: application/json'
  -d '{ "language": { "source": "pt", "target": "en" }, "texts": { "phrase": "Olá mundo!" } }'
```

#### JavaScript/Axios

```js
const axios = require('axios');

axios.post('http://translate.api.jpfb.me', {
	language: {
		source: 'pt',
		target: 'en',
	},
	texts: {
		phrase: 'Olá mundo!',
	},
})
	.then((response) => {
		console.log(response.data);
	})
	.catch((error) => {
		console.log(error);
	});
```
### Response Example

```json
{
	"translation": {
		"language": "en",
		"texts": {
			"phrase": "Hello world!"
		}
	}
}
```

## :rocket: Technologies

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Puppeteer](https://pptr.dev/)

## ✍️ Author

A project made by [João Pedro Ferreira Barbosa](https://github.com/oJPBarbosa).

## 🌎 License

This project in under MIT license. Check [LICENSE](https://github.com/oJPBarbosa/translate-api/LICENSE) for more information.