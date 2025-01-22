import { useState } from "react";

function RecapUseState() {
    const num = 5;
    const [number, setNumber] = useState(4);
    const [number2, setNumber2] = useState({ num: 5 });

    console.log(number2.num);

    const hdlIncrease = () => {
        console.log("Easy, useState");
        setNumber((prev) => prev + 1);
    };

    const hdlDecrease = () => {
        setNumber((prev) => prev - 1);
    };

    const hdlIncrease2 = () => {
        setNumber2((prev) => ({ num: prev.num + 1 }));
    };

    const hdlDecrease2 = () => {
        setNumber2((prev) => ({ num: prev.num - 1 }));
    };

    const hdlMutiply = () => {
        setNumber2((prev) => ({ num: prev.num * 2 }));
    };
    const hdlDivided = () => {
        setNumber2((prev) => ({ num: prev.num / 2 }));
    };

    return (
        <div>
            <h1 className="text-8xl">{number}</h1>
            <br />
            <button
                className="bg-red-500 p-2 hover:scale-105 hover:duration-300
             hover:bg-red-700 rounded-md shadow-md"
                onClick={hdlIncrease}
            >
                Increase
            </button>
            <button
                className="bg-green-500 p-2 hover:scale-105 hover:duration-300 hover:bg-green-700 rounded-md shadow-md"
                onClick={hdlDecrease}
            >
                Decrease
            </button>
            <hr />
            <p className="text-8xl">{number2.num}</p>
            <br />
            <button
                className="bg-red-500 p-2 hover:scale-105 hover:duration-300 hover:bg-red-700 rounded-md shadow-md"
                onClick={hdlIncrease2}
            >
                Increase
            </button>
            <button
                className="bg-green-500 p-2 hover:scale-105 hover:duration-300 hover:bg-green-700 rounded-md shadow-md"
                onClick={hdlDecrease2}
            >
                Decrease
            </button>
            <button
                className="bg-pink-500 p-2 hover:scale-105 hover:duration-300 hover:bg-pink-700 rounded-md shadow-md"
                onClick={hdlMutiply}
            >
                Multiply
            </button>
            <button
                className="bg-blue-500 p-2 hover:scale-105 hover:duration-300 hover:bg-blue-700 rounded-md shadow-md"
                onClick={hdlDivided}
            >
                Divide
            </button>
        </div>
    );
}

export default RecapUseState;

