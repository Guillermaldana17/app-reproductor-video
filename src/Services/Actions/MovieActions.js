import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/fields";
import "@pnp/sp/site-users/web";

import {GET_ITEMS, LOGS_ERROR, LIST_MOVIE} from './Types'

const headers = {
  Accept: 'application/json;odata=nometadata'
};

export const getItems = () => async dispatch => {
    try {
      const items = await sp.web.lists.getByTitle(LIST_MOVIE)
        .configure({ headers })
        .items
        .select('Title', 'Id','Created')
        .get();
        console.log(items)
      dispatch({
        type: GET_ITEMS,
        payload: items
      })
    }
    catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  }