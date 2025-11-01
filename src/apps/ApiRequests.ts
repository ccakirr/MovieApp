class ApiReq{
	key: string
	baseURL: string
	constructor(apiKey:string){
		this.key = apiKey
		this.baseURL ="https://api.themoviedb.org/3"
	}

	async getFilm(filmName:string){
		try {
			const response = await fetch(`${this.baseURL}/search/movie?api_key=${this.key}&query=${filmName.trim()}`)
			if(!response.ok){
				throw new Error(`HTTP Error: ${response.status}`)
			}
			const data = await response.json()
			return data.results
		} catch (error) {
			console.error("Film verisi alınamadı", error)
			return[]
		}
	}

	async getTenPopularFilm(){
		try {
			const response = await fetch(`${this.baseURL}/movie/popular?api_key=${this.key}`);
			if(!response.ok){
				throw new Error(`Http Error: ${response.status}`)
			}
			const data = await response.json()
			return data.results.slice(0, 10)
		} catch (error) {
			console.error("Film verisi alınamadı", error)
			return []
		}
	}
}

export default ApiReq