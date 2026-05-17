export type ApiDifficulty = 'Beginner' | 'Intermediate' | 'Advanced'

export type ApiExample = {
  label: string
  value: string
}

export type ApiCatalogItem = {
  id: string
  name: string
  category: 'Animals' | 'Knowledge' | 'Geography' | 'Weather' | 'Developer' | 'Practice Data' | 'Quiz' | 'Anime'
  difficulty: ApiDifficulty
  auth: 'No auth' | 'Optional token later'
  sourceRepoStatus: string
  endpoint: string
  docsUrl: string
  concepts: string[]
  teaches: string
  beginnerExplanation: string
  developerExplanation: string
  funExplanation: string
  inputLabel?: string
  inputPlaceholder?: string
  examples?: ApiExample[]
  buildUrl: (input: string) => string
  renderHint: string
  practiceTask: string
  safetyNote: string
}

const encode = (value: string) => encodeURIComponent(value.trim())

export const apiCatalog: ApiCatalogItem[] = [
  {
    id: 'cat-facts',
    name: 'Cat Facts',
    category: 'Animals',
    difficulty: 'Beginner',
    auth: 'No auth',
    sourceRepoStatus: 'Curated from the public-apis repo and selected because it is no-key, HTTPS, JSON, and beginner-friendly.',
    endpoint: 'https://catfact.ninja/fact',
    docsUrl: 'https://catfact.ninja/',
    concepts: ['fetch()', 'JSON object', 'loading state'],
    teaches: 'Make your first real API call and render one field from a JSON object.',
    beginnerExplanation: 'Ask the internet for one cat fact, then show the answer on the page.',
    developerExplanation: 'This endpoint returns a single JSON object with a fact string and length number, which is perfect for teaching typed response rendering.',
    funExplanation: 'Like asking Doraemon for one random gadget fact: one request goes out, one useful surprise comes back.',
    buildUrl: () => 'https://catfact.ninja/fact',
    renderHint: 'Display response.fact as the main sentence and response.length as metadata.',
    practiceTask: 'Build a “new fact” button with loading and error states.',
    safetyNote: 'Safe for frontend demos because it does not need a secret key.',
  },
  {
    id: 'dog-ceo',
    name: 'Dog CEO',
    category: 'Animals',
    difficulty: 'Beginner',
    auth: 'No auth',
    sourceRepoStatus: 'Curated from the public-apis repo; good starter API for image URL responses.',
    endpoint: 'https://dog.ceo/api/breeds/image/random',
    docsUrl: 'https://dog.ceo/dog-api/',
    concepts: ['image URL', 'conditional rendering', 'status field'],
    teaches: 'Turn an API response into an image card.',
    beginnerExplanation: 'The API gives us a random dog photo link, and our app shows the photo.',
    developerExplanation: 'The response contains message as an image URL and status as request metadata, useful for explaining response shape.',
    funExplanation: 'Like Ash opening a Poké Ball, except every click releases a random dog picture instead of a Pokémon.',
    buildUrl: () => 'https://dog.ceo/api/breeds/image/random',
    renderHint: 'Use response.message as an image src when response.status is success.',
    practiceTask: 'Create a gallery that saves the last five dog images in component state.',
    safetyNote: 'No key needed. External image loading depends on the image host being reachable.',
  },
  {
    id: 'rest-countries',
    name: 'REST Countries',
    category: 'Geography',
    difficulty: 'Intermediate',
    auth: 'No auth',
    sourceRepoStatus: 'Curated from the public-apis repo; strong for teaching nested JSON and search input.',
    endpoint: 'https://restcountries.com/v3.1/name/{country}',
    docsUrl: 'https://restcountries.com/',
    concepts: ['query input', 'arrays', 'nested JSON', 'maps/lists'],
    teaches: 'Search real country data and extract nested fields like flags, currencies, languages, and population.',
    beginnerExplanation: 'Type a country name and the API returns facts about matching countries.',
    developerExplanation: 'This endpoint returns an array of country objects with nested maps for currencies and languages, which teaches safe optional access.',
    funExplanation: 'Like opening the Hunter x Hunter world map: one country search reveals flags, regions, languages, and stats.',
    inputLabel: 'Country name',
    inputPlaceholder: 'India',
    examples: [{ label: 'India', value: 'India' }, { label: 'Japan', value: 'Japan' }, { label: 'Brazil', value: 'Brazil' }],
    buildUrl: (input) => `https://restcountries.com/v3.1/name/${encode(input || 'India')}`,
    renderHint: 'Render the first result: name.common, flag image, capital[0], population, region, languages.',
    practiceTask: 'Build a country search app with empty, loading, success, and not-found states.',
    safetyNote: 'No API key. Always handle arrays because searches can return multiple countries.',
  },
  {
    id: 'open-meteo',
    name: 'Open-Meteo Weather',
    category: 'Weather',
    difficulty: 'Intermediate',
    auth: 'No auth',
    sourceRepoStatus: 'Curated from the public-apis repo; ideal for query parameters and dashboard widgets.',
    endpoint: 'https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true',
    docsUrl: 'https://open-meteo.com/en/docs',
    concepts: ['query parameters', 'numbers', 'real-time data'],
    teaches: 'Build URLs with parameters and render live weather data.',
    beginnerExplanation: 'Give the API a location using latitude and longitude; it returns current weather.',
    developerExplanation: 'The request uses query parameters and returns nested current_weather data, making it useful for URL construction and typed parsing.',
    funExplanation: 'Like Nami from One Piece reading the climate: coordinates go in, weather intelligence comes out.',
    inputLabel: 'Latitude, longitude',
    inputPlaceholder: '13.08,80.27',
    examples: [{ label: 'Chennai', value: '13.08,80.27' }, { label: 'Tokyo', value: '35.68,139.76' }, { label: 'London', value: '51.50,-0.12' }],
    buildUrl: (input) => {
      const [lat = '13.08', lon = '80.27'] = (input || '13.08,80.27').split(',').map((part) => part.trim())
      return `https://api.open-meteo.com/v1/forecast?latitude=${encode(lat)}&longitude=${encode(lon)}&current_weather=true`
    },
    renderHint: 'Display current_weather.temperature, windspeed, winddirection, and time.',
    practiceTask: 'Make a weather widget for three preset cities.',
    safetyNote: 'No key needed. Validate numeric latitude/longitude in production code.',
  },
  {
    id: 'github-repo',
    name: 'GitHub Repository API',
    category: 'Developer',
    difficulty: 'Intermediate',
    auth: 'No auth',
    sourceRepoStatus: 'Curated from the public-apis repo; useful because developers recognize GitHub data.',
    endpoint: 'https://api.github.com/repos/{owner}/{repo}',
    docsUrl: 'https://docs.github.com/en/rest/repos/repos',
    concepts: ['developer APIs', 'rate limits', 'repository metadata'],
    teaches: 'Read real developer platform data such as stars, forks, issues, language, and license.',
    beginnerExplanation: 'Type a public GitHub repo and see its public stats.',
    developerExplanation: 'Unauthenticated GitHub REST calls are rate-limited but excellent for teaching headers, status codes, and real-world JSON fields.',
    funExplanation: 'Like checking a hero’s bounty poster in One Piece: stars, forks, and issues show how famous and active a repo is.',
    inputLabel: 'owner/repo',
    inputPlaceholder: 'public-apis/public-apis',
    examples: [{ label: 'public-apis', value: 'public-apis/public-apis' }, { label: 'React', value: 'facebook/react' }, { label: 'Vite', value: 'vitejs/vite' }],
    buildUrl: (input) => {
      const cleaned = (input || 'public-apis/public-apis').trim().replace(/^https:\/\/github.com\//, '')
      const [owner = 'public-apis', repo = 'public-apis'] = cleaned.split('/')
      return `https://api.github.com/repos/${encode(owner)}/${encode(repo)}`
    },
    renderHint: 'Render full_name, stargazers_count, forks_count, open_issues_count, language, html_url.',
    practiceTask: 'Build a GitHub repo stats card and add a rate-limit friendly error message.',
    safetyNote: 'No token for basic public requests. Authenticated usage should go through a backend, never a frontend secret.',
  },
  {
    id: 'jsonplaceholder',
    name: 'JSONPlaceholder Posts',
    category: 'Practice Data',
    difficulty: 'Beginner',
    auth: 'No auth',
    sourceRepoStatus: 'Curated from the public-apis repo; classic fake REST API for CRUD practice.',
    endpoint: 'https://jsonplaceholder.typicode.com/posts',
    docsUrl: 'https://jsonplaceholder.typicode.com/',
    concepts: ['REST', 'list rendering', 'fake CRUD'],
    teaches: 'Render a list of posts and understand REST-style resources.',
    beginnerExplanation: 'It gives fake posts so you can practice without breaking a real database.',
    developerExplanation: 'The API exposes REST-like resources for GET/POST/PUT/PATCH/DELETE exercises; writes are faked and not persisted.',
    funExplanation: 'Like training in the Matrix: the posts look real enough for practice, but nothing permanent gets damaged.',
    buildUrl: () => 'https://jsonplaceholder.typicode.com/posts?_limit=5',
    renderHint: 'Map over the array and render title/body cards.',
    practiceTask: 'Create a posts list and a fake create-post form.',
    safetyNote: 'Good for demos because mutations are fake; tell learners the data is not actually saved.',
  },
  {
    id: 'dummyjson-products',
    name: 'DummyJSON Products',
    category: 'Practice Data',
    difficulty: 'Intermediate',
    auth: 'No auth',
    sourceRepoStatus: 'Curated from the public-apis repo; practical for cards, search, and dashboard layouts.',
    endpoint: 'https://dummyjson.com/products/search?q={query}',
    docsUrl: 'https://dummyjson.com/',
    concepts: ['search', 'pagination', 'cards', 'arrays'],
    teaches: 'Build product grids from realistic nested JSON.',
    beginnerExplanation: 'Search fake products and show them as cards with price and rating.',
    developerExplanation: 'The response wraps products in an object with total/skip/limit metadata, useful for pagination mental models.',
    funExplanation: 'Like Tony Stark opening a gadget catalog: search a term, inspect products, compare specs.',
    inputLabel: 'Product search',
    inputPlaceholder: 'phone',
    examples: [{ label: 'Phone', value: 'phone' }, { label: 'Laptop', value: 'laptop' }, { label: 'Fragrance', value: 'fragrance' }],
    buildUrl: (input) => `https://dummyjson.com/products/search?q=${encode(input || 'phone')}`,
    renderHint: 'Render response.products with title, thumbnail, price, rating, and category.',
    practiceTask: 'Build a searchable product browser with a “no results” state.',
    safetyNote: 'Fake product data; safe for frontend practice.',
  },
  {
    id: 'pokeapi',
    name: 'PokéAPI',
    category: 'Knowledge',
    difficulty: 'Intermediate',
    auth: 'No auth',
    sourceRepoStatus: 'Curated from the public-apis repo; fun and excellent for nested JSON.',
    endpoint: 'https://pokeapi.co/api/v2/pokemon/{name}',
    docsUrl: 'https://pokeapi.co/docs/v2',
    concepts: ['nested arrays', 'sprites/images', 'stats'],
    teaches: 'Extract nested arrays for abilities, types, sprites, and stats.',
    beginnerExplanation: 'Search a Pokémon and the API returns its image, type, abilities, and stats.',
    developerExplanation: 'The response has nested arrays and objects that teach map/filter and optional rendering of deep fields.',
    funExplanation: 'It is literally a Pokédex API: type a name and Professor Oak sends back the data.',
    inputLabel: 'Pokémon name',
    inputPlaceholder: 'pikachu',
    examples: [{ label: 'Pikachu', value: 'pikachu' }, { label: 'Charizard', value: 'charizard' }, { label: 'Greninja', value: 'greninja' }],
    buildUrl: (input) => `https://pokeapi.co/api/v2/pokemon/${encode((input || 'pikachu').toLowerCase())}`,
    renderHint: 'Render name, sprites.front_default, types[].type.name, abilities[].ability.name, and stats.',
    practiceTask: 'Create a Pokémon profile card with stats bars.',
    safetyNote: 'No key needed. Some names require lowercase or exact API slugs.',
  },
  {
    id: 'jikan-anime',
    name: 'Jikan Anime',
    category: 'Anime',
    difficulty: 'Intermediate',
    auth: 'No auth',
    sourceRepoStatus: 'Curated from the public-apis repo; matches our anime/movie analogy learning style.',
    endpoint: 'https://api.jikan.moe/v4/anime/{id}',
    docsUrl: 'https://docs.api.jikan.moe/',
    concepts: ['API limits', 'nested media objects', 'rich cards'],
    teaches: 'Render real media metadata and handle rate-limited APIs respectfully.',
    beginnerExplanation: 'Give an anime ID and it returns title, image, score, episodes, and synopsis.',
    developerExplanation: 'Jikan wraps the result in a data object with nested images and metadata; it is good for rich detail pages.',
    funExplanation: 'Like opening MyAnimeList inside our app: enter an anime ID and get the character sheet for the show.',
    inputLabel: 'Anime ID',
    inputPlaceholder: '1',
    examples: [{ label: 'Cowboy Bebop', value: '1' }, { label: 'Naruto', value: '20' }, { label: 'One Piece', value: '21' }],
    buildUrl: (input) => `https://api.jikan.moe/v4/anime/${encode(input || '1')}`,
    renderHint: 'Render data.title, data.images.jpg.image_url, data.score, data.episodes, data.synopsis.',
    practiceTask: 'Build an anime info card and truncate long synopsis text.',
    safetyNote: 'No key, but respect rate limits and avoid rapid repeated requests.',
  },
  {
    id: 'open-trivia',
    name: 'Open Trivia DB',
    category: 'Quiz',
    difficulty: 'Intermediate',
    auth: 'No auth',
    sourceRepoStatus: 'Curated from the public-apis repo; useful for our platform quiz features.',
    endpoint: 'https://opentdb.com/api.php?amount=5&type=multiple',
    docsUrl: 'https://opentdb.com/api_config.php',
    concepts: ['quiz data', 'HTML entities', 'randomized options'],
    teaches: 'Generate quiz questions from an API and normalize answer choices.',
    beginnerExplanation: 'The API sends trivia questions, correct answers, and wrong answers.',
    developerExplanation: 'The response includes results with correct_answer and incorrect_answers; UI code must combine, decode, and shuffle options.',
    funExplanation: 'Like the Chunin Exams question round: the API gives questions and options, but your app must present them fairly.',
    buildUrl: () => 'https://opentdb.com/api.php?amount=5&type=multiple',
    renderHint: 'Combine correct_answer and incorrect_answers, decode HTML entities, then render multiple-choice cards.',
    practiceTask: 'Build a mini quiz that shows score after five questions.',
    safetyNote: 'No key needed. Decode HTML entities before displaying text.',
  },
]

export const apiLearningModules = [
  'What is an API? Request, response, endpoint, method, and status code.',
  'What is JSON? Objects, arrays, strings, numbers, booleans, and null.',
  'How fetch works in React: loading, success, empty, and error states.',
  'Query parameters: how inputs become URLs for search/weather APIs.',
  'API safety: keys, rate limits, CORS, and why secrets need a backend.',
  'Mini projects: country search, weather widget, Pokémon card, GitHub stats, quiz app.',
]

export const apiPhaseRules = [
  'Use the public-apis repo as a discovery source, not a blind import.',
  'Phase 2 includes only no-auth, browser-safe APIs for direct frontend practice.',
  'Any API key or paid/free-tier API is postponed until a backend/proxy phase.',
  'Every API must teach a concept, include a practice task, and handle errors.',
]
