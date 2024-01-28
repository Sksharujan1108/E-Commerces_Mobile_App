export default {
    addressSliceStatus: undefined,
  
    // Post Address ***
    addressData: undefined,
    addressDataStatus: undefined,
};

export const address = {
    message: undefined,
    status: undefined,
    errors: [],
    errorsDescription: []
}; 

export const addressRequestBody = {
    userId: '',
    address: '',
  };
  
export const addressResponseBody = {
    status: undefined,
    responseDto: {
      message: undefined,
    },
  };