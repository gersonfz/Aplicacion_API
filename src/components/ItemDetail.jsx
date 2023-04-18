import React from 'react'
import ItemCard from './ItemCard'
import { Link, useParams } from 'react-router-dom'
import { useAPI } from '../hooks/useAPI'
import { Rings } from 'react-loader-spinner'
import { IoReturnDownBackOutline } from 'react-icons/all'

const ItemDetail = () => {

    const { idParams } = useParams();
    const { error, isLoading, data } = useAPI("https://jsonplaceholder.typicode.com/photos");


    if (isLoading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <Rings className='absolute t-[] l-[50]'
                    height="150"
                    width="150"
                    color="#2563eb"
                    radius="6"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="rings-loading"
                />
            </div>
        )
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    //En caso de poseer alguna base de datos, se reemplaza este codigo por la implementacion de la misma!

    const oneDetail = data.find(element => element.id === +idParams);
    const detailArray = [];
    detailArray.push(oneDetail);

    return (
        <section className='max-w-md m-auto flex flex-col justify-center'>
            <div className='m-auto w-[100%]'>
                <ItemCard item={detailArray} />
            </div>
            <Link to={'/'}  >
                <div className='w-fit m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full'>
                    Volver a home
                    <IoReturnDownBackOutline className='text-xl m-auto' />
                </div>
            </Link>
        </section>
    )
}

export default ItemDetail