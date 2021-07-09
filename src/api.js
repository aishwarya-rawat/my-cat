import http from "../src/commons/http";
import { toast } from 'react-toastify'; 
const x_api_key = "c63b7dc1-da40-470d-a00d-9a6e0d99fc73";

export const uploadImage = payload => {
  const URL = `/images/upload`;
  return http.post(URL, payload,{
    headers: {
      'content-type': 'multipart/form-data',
      'x-api-key': x_api_key
    }
  })
    .then(response => {
        console.log(response)
        return response.data;
    })
    .catch(error => {
      if(error?.response?.data?.message){
      toast.error(error.response.data.message);
    }else{
      toast.error("Error while uploading file");
    }
    });
};


export const getImages = payload => {
    const URL = '/images';

    return http.get(URL,{params:{...payload}}).then( response => {
        console.log(response)
        return response.data;
    }).catch(error =>{throw error;});
}

export const getAllFav = payload => {
    const URL = '/favourites';

    return http.get(URL,{params:{...payload}})
    .then( response => {
        console.log(response)
        return response.data;
    }).catch(error =>{throw error});
}

export const setFav = payload => {
    const URL = '/favourites';
    return http.post(URL, payload)
        .then(response => {
            console.log(response)
            return response.data;
        })
        .catch(error => {
          throw error;
        });
}

export const unsetFav = id => {
    const URL = `favourites/${id}`;
    return http.delete(URL)
    .then(response=> response.data)
    .catch(error => {throw error});
}


export const vote = payload => {
    const URL = '/votes';
    return http.post(URL, payload)
        .then(response => {
            console.log(response)
            return response.data;
        })
        .catch(error => {
          throw error;
        });
}


export const getAllVotes = payload => {
  const URL = '/votes';
  return http.get(URL,{params:{...payload}})
    .then( response => {
        console.log(response)
        return response.data;
    }).catch(error =>{throw error});
}

//TODO : get score