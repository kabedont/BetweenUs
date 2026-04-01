import {supabase} from './supabaseClient'
import imageCompression from 'browser-image-compression';

async function uploadImage(file){
    const fileName = `${Date.now()}_${file.name}`

    const options = {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 1200,
        useWebWorker: true
    };

    const compressedFile = await imageCompression(file,options);

    const {data, error} = await supabase
        .storage
        .from('galleries')
        .upload(fileName, compressedFile)
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