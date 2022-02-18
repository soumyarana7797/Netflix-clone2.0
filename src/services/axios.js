import axios from 'axios';
import { toast } from 'react-toastify';
import * as localStorageService from './localStorageService';
import { BASE_URL } from './apiConfig';
import { userLogoutSuccess } from 'store/actions';
import { CustomToast } from 'shared/components';
import { routeConstants } from 'shared/constants';

axios.defaults.baseURL = BASE_URL;

// errorComposer will compose a handleGlobally function
const errorComposer = (error, dispatch) => {
  return () => {
    const statusCode = error.response ? error.response.status : null;
    if (statusCode === 404) {
      toast.error('The requested resource does not exist or has been deleted');
    }

    if (statusCode === 401) {
      toast.error('Please login to access this resource');
      // localStorageService.clearLoginData();
      // dispatch(userLogoutSuccess({ redirection: true }));
    }
    if (statusCode === 403) {
      toast.error('You are getting Forbidden error');
      // if (error.response && error.response.data.message) {
      //   if (error.response.data.message === 'NO_SUBSCRIPTION') {
      //     toast.error(
      //       <CustomToast
      //         buttonText="Choose plan"
      //         link={routeConstants.SUBSCRIPTION_PLANS.route}
      //         toastText="You do not have an active subscription. Please choose a plan"
      //       />,
      //       { autoClose: 7000 }
      //     );
      //   } else {
      //     toast.error(error.response.data.message);
      //   }
      // } else {
      //   toast.error('You do not have active Subscription');
      // }
    }
    if (statusCode === 500) {
      toast.error('Something Went wrong!');
    }

    if (statusCode === 422) {
      toast.error('Something wrong happened');
      // if (
      //   error.response &&
      //   error.response.data.errors &&
      //   Object.keys(error.response.data.errors).length
      // ) {
      //   const { errors } = error.response.data;
      //   const errorKeys = Object.keys(errors);
      //   errorKeys.forEach((key) => toast.error(errors[key]));
      // } else if (error.response && error.response.data.message) {
      //   toast.error(error.response.data.message);
      // } else {
      //   toast.error('Something wrong happened');
      // }
    }
  };
};

export const setupAxios = (dispatch) => {
  axios.interceptors.response.use(undefined, function (error) {
    error.handleGlobally = errorComposer(error, dispatch);

    return Promise.reject(error);
  });

  // Add a request interceptor
  axios.interceptors.request.use(
    (config) => {
      const token = localStorageService.getAccessToken();
      if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
      }
      // config.headers['Content-Type'] = 'application/json';
      return config;
    },
    (error) => {
      toast.error('Something wrong happened');
      return Promise.reject(error);
    }
  );
};
