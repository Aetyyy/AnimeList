export const getAnimeResponse = async(resource: string, query: string) => {
    const response = await fetch(`${process.env.API_ANIME}/${resource}?${query}`)
    const anime = await response.json()
    return anime
}