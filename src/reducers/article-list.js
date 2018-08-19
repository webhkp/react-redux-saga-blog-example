export default function(state = null, action) {
  switch(action.type) {
      case 'GET_ARTICLE_LIST_SUCCESS': return action.payload;

      default:
      break;
  }

  return state;
}
