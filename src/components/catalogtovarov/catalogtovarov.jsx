import { PoiskTovarov } from '../Poisk/Poisk';
import { Tovar } from '../tovar/tovar'
import s from './catalogtovarov.module.css'
import React, { useState } from 'react';

const products = [
    {
        id: 1,
        title: 'Толстовка 1',
        size: 'S-M',
        price: 5000,
        image: 'https://i.pinimg.com/564x/66/9b/49/669b4981a0c59f926bf806620e3fbb49.jpg',
        quantity: 0,
        category: 'Милые'
    },

    {
        id: 2,
        title: 'Толстовка 2',
        size: 'S-M',
        price: 5500,
        image: 'https://i.pinimg.com/564x/35/91/f4/3591f4ce013edebfa9ff06d2464191e4.jpg',
        quantity: 7,
        category: 'Повседневные'
    },
    {
        id: 3,
        title: 'Толстовка 3',
        size: 'S-M',
        price: 3000,
        image: 'https://i.pinimg.com/564x/d9/96/9f/d9969ff27cbfadd87b1eb77467468e5a.jpg',
        quantity: 4,
        category: 'Милые'
    },
    {
        id: 4,
        title: 'Толстовка 4',
        size: 'S-M',
        price: 4400,
        image: 'https://i.pinimg.com/564x/3e/a2/0e/3ea20ef6900c270e101ab6002fae7882.jpg',
        quantity: 0,
        category: 'Стильные'
    },

    {
        id: 5,
        title: 'Толстовка 5',
        size: 'S-M',
        price: 1300,
        image: 'https://i.pinimg.com/564x/fd/5a/ff/fd5aff84fe97c8abceb78ffcf53a7872.jpg',
        quantity: 2,
        category: 'Повседневные'
    },
    {
        id: 6,
        title: 'Толстовка 6',
        size: 'S-M',
        price: 3500,
        image: 'https://i.pinimg.com/736x/8b/da/53/8bda53f227e0536ac9c8ce66f1bac4a8.jpg',
        quantity: 5,
        category: 'Стильные'
    }
];


export function Catalogtovarov() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortCriteria, setSortCriteria] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(''); 

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const sortProducts = (products) => {
        if (sortCriteria === 'priceAsc') {
            return products.sort((a, b) => a.price - b.price);
        } else if (sortCriteria === 'priceDesc') {
            return products.sort((a, b) => b.price - a.price);
        } else if (sortCriteria === 'quantityAsc') {
            return products.sort((a, b) => a.quantity - b.quantity);
        } else if (sortCriteria === 'quantityDesc') {
            return products.sort((a, b) => b.quantity - a.quantity);
        }
        return products;
    };

    const filterProducts = (products) => {
        if (selectedCategory) {
            return products.filter(product => product.category === selectedCategory);
        }
        return products; 
    };

    const filteredProducts = filterProducts(products).filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = sortProducts(filteredProducts);

    return (
        <div className={s.catalogszag}>
        <h1 className={s.Zagolovktov}>Каталог товаров</h1>
        <div className={s.PoiskFiltr}>
            <input className={s.Pole}
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Поиск товаров..."
            />
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Все категории</option>
                <option value="Милые">Милые</option>
                <option value="Стильные">Стильные</option>
                <option value="Повседневные">Повседневные</option>
            </select>
            <select value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}>
                <option value="">Без сортировки</option>
                <option value="priceAsc">Цена: по возрастанию</option>
                <option value="priceDesc">Цена: по убыванию</option>
            </select>
        </div>
            <div className={s.catalogs}>
                <div className={s.catalog}>
                    {sortedProducts.map((product) => (
                        <Tovar 
                            key={product.id}
                            id={product.id}
                            title={product.title} 
                            size={product.size}
                            price={product.price} 
                            image={product.image} 
                            quantity={product.quantity} 
                            category={product.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}