import { create } from "zustand"

    //Step 1 Create Store
    const nhanStore = (set) => ({
        firstName: 'Yodrawee',
        lastName: 'Yodrabum',
        address: {street: '1234', zipcode: '567'},
        profile: ['Yodrawee', 'Yodrabum'],
        product: [
            {id:1, title: 'Asus', price: 20000},
            {id:2, title: 'Apple', price: 25000}
        ],
        number : 5,
        actionIncrease: () => {
            set((state)=>({number: state.number +1}));
        },
        actionDecrease: () => {
            set((state)=>({number: Math.max(0,state.number -1)}))
        },
        actionMultiply: () => {
            set((state)=>({number: state.number * 2}))
        },
        actionDivided: () => 
            set((state)=>({number: state.number / 2}))
        
    })


    const useNhanStore = create(nhanStore)

export default useNhanStore