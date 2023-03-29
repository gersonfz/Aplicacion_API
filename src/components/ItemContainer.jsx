import React from "react";
import ItemCard from "./ItemCard";
import { Rings } from "react-loader-spinner";
import { useAPI } from "../hooks/useApi";

const ItemContainer = () => {
    const { data, error, isLoading } = useAPI("https://jsonplaceholder.typicode.com/photos");

    if (isLoading) {
        return(
            <div  className='flex justify-center items-center h-screen'>
                <Rings
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
    return (
        <section className="flex flex-row flex-wrap justify-center m-5">
            <ItemCard item={data} />
        </section>
    );
};

export default ItemContainer;
