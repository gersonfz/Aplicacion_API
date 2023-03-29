import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Item = ({ id, title, url, thumbnailUrl }) => {
    const { idParams } = useParams();
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-5">
            <Link to={`/${id}`}>
                <img className="w-full" src={thumbnailUrl} alt="Api placeholder" />
            </Link>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base ">
                        Esta es la url de la api: {url}
                    </p>
                </div>

            {
                !idParams 
                &&             
                <div className='my-2 flex'>
                    <Link to={`/${id}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-auto rounded-full'>
                        Ver en detalle
                    </Link>
                </div>
            }
        </div>
    )
}

export default Item