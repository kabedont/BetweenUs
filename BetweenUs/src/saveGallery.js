import {supabase} from './supabaseClient'

async function saveGallery(gridSize, imageUrls, descriptions){
    const{data, error} = await supabase
        .from('galleries')
        .insert([{grid_size: gridSize, image_urls: imageUrls, descriptions: descriptions}])
        .select() //returns inserted row with id
    
    if(error){
        console.error("Error saving gallery: ", error)
        return null
    }
    return data[0].id //returns unique gallery ID
}

export default saveGallery