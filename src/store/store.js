import createStore from 'redux-zero';

const board = [
    {
        id: 0,
        name: 'Beth',
        cards: [
            {
                name: "Testeo",
                commit: ["Prototipo", "Estilos"],
                todostado: false
            },
            {
                name: "Mocha",
                commit: ["Prototipo", "Funcionalidad", "etc"],
                todostado: false
            }
        ],
        toggle: false
    },
    {
        id: 1,
        name: 'Diana',
        cards: [
            {
                name: "Testeo",
                commit: ["Prototipo", "Estilos"],
                todostado: false
            },
            {
                name: "Mocha",
                commit: ["Prototipo", "Funcionalidad", "etc"],
                todostado: false
            }
        ],
        toggle: false
    },
    {
        id: 2,
        name: 'Leo',
        cards: [
            {
                name: "Testeo",
                commit: ["Prototipo", "Estilos"],
                todostado: false
            },
            {
                name: "Mocha",
                commit: ["Prototipo", "Funcionalidad", "etc"],
                todostado: false
            }
        ],
        toggle: false
    }
];

const tboard = [
    {
        id: 0,
        name: 'Manuel',
        cards: [
            {
                name: "Testeo",
                commit: ["Prototipo", "Estilos"],
                todostado: false
            },
            {
                name: "Mocha",
                commit: ["Prototipo", "Funcionalidad", "etc"],
                todostado: false
            }
        ],
        toggle: false
    },
    {
        id: 1,
        name: 'Adele',
        cards: [
            {
                name: "Testeo",
                commit: ["Prototipo", "Estilos"],
                todostado: false
            },
            {
                name: "Mocha",
                commit: ["Prototipo", "Funcionalidad", "etc"],
                todostado: false
            }
        ],
        toggle: false
    },
    {
        id: 2,
        name: 'Vale',
        cards: [
            {
                name: "Testeo",
                commit: ["Prototipo", "Estilos"],
                todostado: false
            },
            {
                name: "Mocha",
                commit: ["Prototipo", "Funcionalidad", "etc"],
                todostado: false
            }
        ],
        toggle: false
    },
    {
        id: 3,
        name: 'Ana',
        cards: [
            {
                name: "Testeo",
                commit: ["Prototipo", "Estilos"],
                todostado: false
            },
            {
                name: "Mocha",
                commit: ["Prototipo", "Funcionalidad", "etc"],
                todostado: false
            }
        ],
        toggle: false
    }
];

const initialState = {
    board: board,
    tboard: tboard,
    selectedTodo: -1,
    idBoard: 0,
    showReply: false
};

const states ={
    stages: ['To do', 'Doing', 'Done'],
    tasks: [
        {
            id: 0,
            title: 'My first task',
            stage: 'To do'
        },
        {
            id: 1,
            title: 'My second task',
            stage: 'Doing'
        },
        {
            id: 2,
            title: 'My third task',
            stage: 'Done'
        }
    ]
}

const store = createStore(initialState);
export default store;