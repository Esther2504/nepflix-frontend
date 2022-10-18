// import _ from 'lodash';
import requests from '../apis/requests';

export const fetchShowAndTrailer = () => async (dispatch, getState) => {
    await dispatch(fetchShow());
    // not done
}



export const fetchShow = (requests, instance, fetchNetflixOriginal) => async dispatch => {
    const responseShow = await requests.get(instance.fetchNetflixOriginal);
    dispatch({ type: 'FETCH_SHOW', payload: responseShow.data })
};

export const fetchTrailer = () => async dispatch => {
    const responseTrailer = await requests.get(instance.fetchTrailers);
    dispatch({ type: 'FETCH_TRAILER', payload: responseTrailer.data })
}; 