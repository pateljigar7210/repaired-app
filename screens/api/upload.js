import RNFetchBlob from "rn-fetch-blob";


// prepare file for upload
const genFile = file => {
    return {
        name: 'image',
        filename: Date.now() + '.png',
        type: 'image/png',
        data: RNFetchBlob.wrap(file.uri),
    }
}



const upload = async ({ url, method = "POST", auth }, data) => {
    
    let body = {};

    if (Array.isArray(data)) {

        body.uploads = data.map(file => genFile(file));

    }
    else body.upload = genFile(data);



    console.log("this is the body we are sending upwards!", data);

    let ret = await RNFetchBlob.fetch(
        method,
        url,
        {
            'Content-Type': 'multipart/form-data',
            'Authorization': auth,
        },

        body

    );
    return ret;
};

export default upload;