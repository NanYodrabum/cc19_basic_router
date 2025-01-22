import useNhanStore from "../store/nhanStore";

function EasyZustand() {
    //javascript

    //step 2 use store
    const firstName = useNhanStore((state) => state.firstName)
    const address = useNhanStore((state) => state.address)
    const profile = useNhanStore((state) => state.profile)
    const products = useNhanStore((state) => state.product)
    const number = useNhanStore((state) => state.number)
    const actionIncrease = useNhanStore((state) => state.actionIncrease)
    const actionDecrease = useNhanStore((state) => state.actionDecrease)
    const actionMultiply = useNhanStore((state) => state.actionMultiply)
    const actionDivided = useNhanStore((state) => state.actionDivided)

    console.log(number);
    const hdlClick = () => {
        actionDecrease()
    }


    return (
        <div>
            {/* <p>{profile[0]}</p>
            <p>{address.zipcode}</p>
            <p>{products[1].title} price: {products[1].price}</p> */}
            <p className='text-8xl'>{number}</p>

            <div className='flex'>
                <button
                    onClick={actionIncrease}
                    className="bg-green-400">Increase</button>
                <br />
                <button
                    onClick={hdlClick}
                    className="bg-blue-400">Decrease</button>
                <br />
                <button
                    onClick={actionMultiply}
                    className="bg-red-400">Multiply</button>
                <br />
                <button
                    onClick={actionDivided}
                    className="bg-purple-400">Divided</button>
            </div>


        </div>
    )
}

export default EasyZustand