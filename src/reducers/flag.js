export default function(state = null, action) {
  switch(action.type) {
      case 'TOGGLE_FLAG': 
        const stateFlag = state || {};
        const keyName = `${action.key}`;
        const currentFlagValue = stateFlag.hasOwnProperty(keyName) ? stateFlag[keyName] : false;
        const isModal = action.modal || false;
        const modalOverlay = (isModal && !currentFlagValue)? true : false;

        return Object.assign({}, stateFlag, {[keyName]: !currentFlagValue, modal_overlay: modalOverlay});

      default:
      break;
  }

  return state;
}
