import http from "../src/commons/http";
import { toast } from 'react-toastify';
import * as Errors from './constant';

export const uploadImage = payload => {
  const URL = `/images/upload`;
  return http.post(URL, payload, {
    headers: {
      'content-type': 'multipart/form-data',
    }
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(Errors.UPLOAD_ERROR);
      }
    });
};


export const getImages = payload => {
  const URL = '/images';

  return http.get(URL, { params: { ...payload } }).then(response => {
    return response.data;
  }).catch(error => {
    if (error?.response?.data?.message) {
      toast.error(error.response.data.message);
    } else {
      toast.error(Errors.GET_IMAGE_ERROR);
    }
  });
}

export const getAllFav = payload => {
  const URL = '/favourites';

  return http.get(URL, { params: { ...payload } })
    .then(response => {
      return response.data;
    }).catch(error => {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(Errors.GET_FAV_ERROR);
      }
    });
}

export const setFav = payload => {
  const URL = '/favourites';
  return http.post(URL, payload)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(Errors.SET_FAV_ERROR);
      }
    });
}

export const unsetFav = id => {
  const URL = `favourites/${id}`;
  return http.delete(URL)
    .then(response => response.data)
    .catch(error => {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(Errors.UNSET_FAV_ERROR);
      }
    });
}


export const vote = payload => {
  const URL = '/votes';
  return http.post(URL, payload)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(Errors.VOTE_ERROR);
      }
    });
}


export const getAllVotes = payload => {
  const URL = '/votes';
  return http.get(URL, { params: { ...payload } })
    .then(response => {
      return response.data;
    }).catch(error => {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(Errors.GET_VOTE_ERROR);
      }
    });
}
