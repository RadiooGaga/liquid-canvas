
// Estado inicial para el reductor
export const INITIAL_STATE = {
  drinks: [],
  drink: {},
  loading: false,
  error: null,
};

// Función reductora para manejar las acciones
export const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, loading: true, error: null, drinks: [], drink: {} };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        drinks: action.payload.drinks, 
        drink: action.payload.drink,
      };
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload, drinks: [], drink: {} };
    default:
      throw new Error(`Acción no soportada: ${action.type}`);
  }
};
