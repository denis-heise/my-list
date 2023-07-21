export default{
    namespaced: true,
    state () {
        return {
            data: [
                {
                    id: 1,
                    name: 'List 1',
                    items: [
                        {
                            id: 1,
                            name: 'Item 1',
                            colorName: 'silver',
                            color: '#c0c0c0',
                            number: 15,
                            select: false
                        },
                        {
                            id: 2,
                            name: 'Item 2',
                            colorName: 'green',
                            color: '#008000',
                            number: 4,
                            select: false
                        },
                        {
                            id: 3,
                            name: 'Item 3',
                            colorName: 'red',
                            color: '#ff0000',
                            number: 6,
                            select: false
                        },
                        {
                            id: 4,
                            name: 'Item 4',
                            colorName: 'blue',
                            color: '#0000ff',
                            number: 4,
                            select: false
                        },
                        {
                            id: 5,
                            name: 'Item 5',
                            colorName: 'yellow',
                            color: '#ffff00',
                            number: 5,
                            select: false
                        },

                    ]
                },
                {
                    id: 2,
                    name: 'List 2',
                    items: [
                        {
                            id: 1,
                            name: 'Item 1',
                            colorName: 'aqua',
                            color: '#00ffff',
                            number: 17,
                            select: false
                        },
                        {
                            id: 2,
                            name: 'Item 2',
                            colorName: 'purple',
                            color: '#800080',
                            number: 3,
                            select: false
                        },
                    ]
                },
                {
                    id: 3,
                    name: 'List 3',
                    items: [
                        {
                            id: 1,
                            name: 'Item 1',
                            colorName: 'maroon',
                            color: '#800000',
                            number: 11,
                            select: false
                        },
                        {
                            id: 2,
                            name: 'Item 2',
                            colorName: 'teal',
                            color: '#008080',
                            number: 13,
                            select: false
                        },
                        {
                            id: 3,
                            name: 'Item 3',
                            colorName: 'lime',
                            color: '#00ff00',
                            number: 7,
                            select: false
                        },
                    ]
                },
                {
                    id: 4,
                    name: 'List 4',
                    items: [
                        {
                            id: 1,
                            name: 'Item 1',
                            colorName: 'red',
                            color: '#ff0000',
                            number: 17,
                            select: false
                        },
                        {
                            id: 2,
                            name: 'Item 2',
                            colorName: 'blue',
                            color: '#0000ff',
                            number: 3,
                            select: false
                        },
                        {
                            id: 3,
                            name: 'Item 3',
                            colorName: 'lime',
                            color: '#00ff00',
                            number: 17,
                            select: false
                        },
                        {
                            id: 4,
                            name: 'Item 4',
                            colorName: 'purple',
                            color: '#800080',
                            number: 3,
                            select: false
                        },
                        {
                            id: 5,
                            name: 'Item 5',
                            colorName: 'green',
                            color: '#008000',
                            number: 17,
                            select: false
                        },
                        {
                            id: 6,
                            name: 'Item 6',
                            colorName: 'yellow',
                            color: '#ffff00',
                            number: 3,
                            select: false
                        },
                    ]
                },
                {
                    id: 5,
                    name: 'List 5',
                    items: [
                        {
                            id: 1,
                            name: 'Item 1',
                            colorName: 'silver',
                            color: '#c0c0c0',
                            number: 17,
                            select: false
                        },
                        {
                            id: 2,
                            name: 'Item 2',
                            colorName: 'blue',
                            color: '#0000ff',
                            number: 3,
                            select: false
                        },
                    ]
                }
            ]
        }
    },
    getters: {
        newData (state){
            return state.data;
        }
    },
    mutations: {
        GET_DATA (state, payload) {
            state.data = payload;
        }
    }
}
