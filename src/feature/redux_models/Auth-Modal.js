// JavaScript equivalent

export default {
    authSliceStatus: undefined,
  
    // Post Register
    registerAuthenticateData: undefined,
    registerAuthenticateDataStatus: undefined,

    // Post Login 
    loginAuthenticateData: undefined,
    loginAuthenticateDataStatus: undefined,

  };
  
  export const authError = {
    message: undefined,
    status: undefined,
    errors: any | []
  };
  
  // Post Register
  export const registerAuthResponseBody = {
    status: undefined,
    responseDto: {
      message: undefined,
    }
  };
  
  export const registerAuthRequestBody = {
    name: '',
    email: '',
    password: '',
  };

  // Login 
  export const loginAuthResponseBody = {
    status: undefined,
    jwttoken: undefined,
    refreshToken: undefined,
    errorDiscription: undefined,
  };
  
  export const loginAuthRequestBody = {
    email: '',
    password: '',
  };
  