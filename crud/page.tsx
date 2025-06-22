// import { create } from "../action";

'use client'

import axios from "axios";
import React, { useState,useEffect } from "react";
import Swal from "sweetalert2";

interface ProductInterface {
    id :number
    name: string
    price: number
}

export default function Crud() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [product,setProduct] = useState<ProductInterface[]>([])
    const [id,setId] = useState(0)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const url = '/api/product/list';
        const response = await axios.get(url);

        if (response.status === 200) {
            setProduct(response.data);
        }
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            name: name,
            price: price
        }

        if (id === 0) {

        const url = '/api/product/create';
        await axios.post(url, payload);

        } else {
            const url = '/api/product/update' + id;
            await axios.put(url, payload);
            setId(0);

        }

        setName('');
        setPrice(0);
       
            Swal.fire({
                title: 'save',
                text: 'success',
                icon: 'success',
                timer: 2000
            })
        


    }

    const handleDelete = async (id : number) => {
    const button = await Swal.fire({
        title: 'ลบรายการ',
        text: 'ยืนยันรายการ',
        icon: 'question',
        showConfirmButton: true,
        showCancelButton: true
    });

    if (button.isConfirmed) {
        const url = 'api/product/delete/' + id;
        try {
            await axios.delete(url);
            fetchData();
        } catch (error) {
            console.error(error);
            
        }
    }
}

const handleEdit = (product : ProductInterface) => {
    setName(product.name)
    setPrice(product.price)
    setId(product.id)
}

    return (
        <div>
            <form onSubmit={handleSave} className="flex flex-col gap-4">
                <div>name</div>
                <input value={name} onChange={(e) => setName(e.target.value)} />

                <div>price</div>
                <input value={price} onChange={(e) => setPrice(Number(e.target.value))} />

                <button type="submit" className="btn">
                    <i className="fa fa-check mr-2"></i>
                    save
                </button>
            </form>

        <div>Product</div>

        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th className="w-[150px]">price</th>
                </tr>
            </thead>
            <tbody>
                {product.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>
                            <div className="flex gap-2">
                            <button className="btn" onClick={()=> handleEdit(product)}>edit</button>
                                <i className="fa fa-pencil"></i>
                            <button className="btn" onClick={() => handleDelete(product.id)}>delete</button>
                                <i className="fa fa=time"></i>
                            </div>
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>

        </div>
    );
}

