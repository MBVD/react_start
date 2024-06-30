const Apirequest = async (url = '', optionsObject = null, errMessage = null) => {
  try{
    const response = await fetch(url, optionsObject);
    if (!response.ok){
      throw Error('please reload the app');
    }
  } catch(err) {
    errMessage = err.message;
  } finally {
    return errMessage;
  }
}

export default ApiRequest