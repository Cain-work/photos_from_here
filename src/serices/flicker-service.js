import fetch from 'cross-fetch';

function getGallery(searchTerm, latitude, Longitude) {
    const apiKey="edf7ec8e425af80a044d2f20b30b105f"
    const perPage = 1
    const CORProxy = "https://shrouded-mountain-15003.herokuapp.com/"
    const baseUrl = "https://flickr.com/services/rest/?"
    const url =
        `${baseUrl}api_key=${apiKey}&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1` +
        `&per_page=${perPage}` +
        `&lat=${latitude}` +
        `&lon=${longitude}` +
        `&text=${searchTerm}`

            returnfetch(url).then(Response => Response.json())
}
export default getGallery