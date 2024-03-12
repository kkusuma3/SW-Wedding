"use client"
import { useState, useEffect } from 'react';
import { getWishes } from '../../pages/api/sheets';
import { Wishes } from './types';


const WishesList = () => {
    const [ fullWishesData, setFullWishesData ] = useState<Array<Wishes>>([]);

    useEffect(() => {
        const fetchData = async() => {
            const data = await getWishes();
            const formattedData = data?.map((row) => ({
                id: row.get('Name'),
                name: row.get('Name'),
                wish: row.get('Wishes')
            })) || [];
            setFullWishesData(formattedData);
        }
        fetchData();
    }, []);

    return (
        <div className="grid grid-cols-1 max-h-80 md:max-h-96 overflow-auto mb-10">
            {
                fullWishesData.length > 0 && fullWishesData.map(({ id, name, wish }) => (
                    <div key={id} className="flex flex-col justify-evenly p-4 mb-2 md:p-4 bg-white rounded-md ">
                        <span className="text-lg md:text-xl font-bold">{name}</span>
                        <p className="text-md md:text-lg">{wish}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default WishesList;