import {supabase} from './supabaseClient'

async function saveGallery(gridSize, imageUrls, descriptions, expiryDays){
    let expires_at = null;
    if (expiryDays !== null && expiryDays > 0){
        const expiryDate = new Date();  //gets current time
        expiryDate.setDate(expiryDate.getDate() + expiryDays)
        expires_at = expiryDate.toISOString();  //formats for supabase
    }
    
    const{data, error} = await supabase
        .from('galleries')
        .insert([{grid_size: gridSize, image_urls: imageUrls, descriptions: descriptions, expires_at: expires_at}])
        .select() //returns inserted row with id
    
    if(error){
        console.error("Error saving gallery: ", error)
        return null
    }

    return data[0].id //returns unique gallery ID
}

export default saveGallery