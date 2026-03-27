import {supabase} from './supabaseClient'

async function uploadImage(file){
    const fileName = `${Date.now()}_${file.name}`
    const {data, error} = await supabase
        .storage
        .from('galleries')
        .upload(fileName, file)
    if (error){
        console.error(error)
        return null
    }

    const{data: urlData} = supabase
        .storage
        .from('galleries')
        .getPublicUrl(fileName)

    return urlData.publicUrl
}

export default uploadImage