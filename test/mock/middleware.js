export default spy => store => next => action => {
  spy();
  if (action.type === 'TRIGGER_ANOTHER_ACTION') {
    store.dispatch({type: 'ANOTHER_ACTION'});
  }
  return next(action);
};
