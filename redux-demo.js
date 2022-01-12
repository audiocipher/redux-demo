const redux = require('redux'); // node.js import for redux

// create a reducer function
// called by the redux library
// parameters: current state, dispatched action
// must always return a new state (usually in the form of an object)
// the reducer function must be a pure function
const counterReducer = (state = { counter: 0 }, action) => {
  console.log('inside counterReducer');

  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// create a central data store
// the reducer function is called to initialize the central data store
const store = redux.createStore(counterReducer);

// initial state
console.log(store.getState());

// subscriber
// a function that is subscribed to the central data store
// we want this function to be executed whenever the state changes
const counterSubscriber = () => {
  // getState() is a method that is available on the central data store
  // gives us the latest state snapshot after it was updated
  const latestState = store.getState();
  console.log(latestState);
};

// setting up a subscription
// subscribe() is a method that is available on the central data store
// parameters: a subscriber function
// redux will execute the subscriber function whenever the data in the store changes
store.subscribe(counterSubscriber);

// action
// dispatch() is a method that is available on the central data store
// parameters: an action which is usually an object with a "type" property
// used to dispatch an action, which causes the reducer function to execute
store.dispatch({ type: 'increment' });

store.dispatch({ type: 'decrement' });
