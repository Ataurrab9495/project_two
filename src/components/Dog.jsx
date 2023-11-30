import React, { useEffect, useState } from 'react'
import ImageContainer from './ImageContainer';

const Dog = React.memo(() => {
    const [dogVarients, setDogVarients] = useState([]);
    const [dogBreed, setDogBreed] = useState('');
    const [dogImage , setDogImage] = useState({});

    useEffect(() => {
        const getVarientsOfDog = async () => {
            const response = await fetch('https://dog.ceo/api/breeds/list/all');
            const { message } = await response.json();
            const varients = Object.keys(message);  /* converting the object into an array to map over */
            setDogVarients(varients);
        }
        getVarientsOfDog();

        const gettingDogImageOnLoad = async() => {
            const res = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`);
            const data = await res.json();
            setDogImage(data.message);
        }
        gettingDogImageOnLoad();
    }, []);


    const gettingDogImage = async() => {
        const res = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`);
        const data = await res.json();
        setDogImage(data.message);
    }
    

    return (
        <div className="flex flex-col justify-center bg-white w-4/5 mx-auto rounded-lg py-5 px-3">
            <h1 className="text-2xl font-bold text-gray-800 text-center underline">Breed List</h1>
            <div className="py-7 px-4 flex items-center gap-5 justify-center">
                <div className="bg-slate-200 py-4 px-3 text-center text-xl text-gray-600 rounded-md">
                    <code>
                        https://dog.ceo/api/breed/
                        <select
                            className="py-1 px-3 rounded mx-2 lg:w-52 focus:outline-none"
                            onChange={(e) => setDogBreed(e.target.value)}
                        >
                            {dogVarients.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                        /images/random
                    </code>
                </div>
                <button onClick={gettingDogImage} className="px-8 py-4 my-2 border border-gray-500 rounded text-lg hover:bg-blue-100">fetch!</button>
            </div>
            <ImageContainer url={dogImage}/>
        </div>
    )
})

export default Dog