const initialState = [
    { id: 1, text: 'Make this work', done: true, created: Date.now() },
    { id: 2, text: 'Teach this to students', done: false, created: Date.now() },
    { id: 3, text: 'Push this to GitHub', done: false, created: Date.now() },
];
export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'ADD_TODO': {
            const id = Math.max(...state.map((td) => td.id)) + 1;
            return [
                ...state,
                { id, text: action.text, done: false, created: Date.now() },
            ];
        }
        case 'DELETE_TODO': {
            const arr = [...state];
            const index = arr.findIndex((td) => td.id === action.id);
            if (index !== -1) {
                arr.splice(index, 1);
            }
            return [...arr];
        }
        case 'DELETE_ALL_TODOS': {
            return [];
        }
        case 'TOGGLE_DONE': {
            const arr = [...state];
            const index = arr.findIndex((td) => td.id === action.id);
            if (index !== -1) {
                arr[index].done = !arr[index].done;
            }
            return [...arr];
        }

        default:
            return state;
    }
}
