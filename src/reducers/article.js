export default function(state = null, action) {
  switch(action.type) {
      case 'GET_ARTICLE_SUCCESS': return (action.payload.data && action.payload.data[0] ? action.payload.data[0] : {});

      default:
      break;
  }

  return state;
}
