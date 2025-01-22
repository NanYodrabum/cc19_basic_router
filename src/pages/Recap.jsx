function Recap() {

    const obj = {
        firstName: 'Yodrawee',
        lastName: 'Yodrabum'
    }
    obj.address = 'BKK'
    const obj2 = {
        street: '1234',
        zipcode: '5678'
    }
    const mergObj = { ...obj, ...obj2 }
    // console.log(mergObj);

    const arr = ['Yodrawee', 'Yodrabum']
    arr[2] = 'BKK'
    const arr2 = ['1234', '5678']
    const mergArr = [...arr, ...arr2]
    // console.log(mergArr);

    const product = [
        { id: 1, title: "Apple", price: 40000 },
        { id: 2, title: "MSI", price: 25000 },
    ]
    console.log(product[1].title);

    const newProduct = { id: 3, title: 'Lenovo', price: '2000' }

    const mergProduct = [...product, { ...newProduct }]
    console.log(mergProduct);


    return <div>Easy, Zustand</div>
}

export default Recap