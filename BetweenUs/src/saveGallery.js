import {supabase} from './supabaseClient'

async function saveGallery(gridSize, imageUrls, descriptions, expiryDays){
    const{data, error} = await supabase
        .from('galleries')
        .insert([{grid_size: gridSize, image_urls: imageUrls, descriptions: descriptions}])
        .select() //returns inserted row with id
    
    if(error){
        console.error("Error saving gallery: ", error)
        return null
    }

    let expires_at = null;
    if (expires_at !== null && expires_at > 0){
        const expiryDate = new Date();  //gets current time
        expiryDate.setDate(expiryDate.getDate() + expiryDays)
        expires_at = expiryDate.toISOString();  //formats for supabase
    }

    return data[0].id //returns unique gallery ID
}

export default saveGallery