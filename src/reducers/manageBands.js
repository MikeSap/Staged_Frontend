export default function manageBands(state = [], action) {
  switch (action.type) {
    case "ADD_BANDS":
      return [...state, ...action.bands];

    case "LOGOUT":
      return [];

    default:
      return state;
  }
}
