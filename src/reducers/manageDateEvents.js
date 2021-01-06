export default function manageDateEvents(state = [], action) {
  switch (action.type) {
    case "DATE_EVENTS":
      return [...action.dateEvents];

    case "LOGOUT":
      return [];

    default:
      return state;
  }
}
