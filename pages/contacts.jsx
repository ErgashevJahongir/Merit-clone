import React from 'react';
import Link from 'next/link';
import style from '../styles/index.module.css';
import styless from '../styles/contacts.module.css';
import { useState } from 'react';
const contacts = () => {
    const [data, setData] = useState([
        {
            id: 1,
            name: 'Filial N1',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23986.377538314657!2d69.205133!3d41.280636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a3b26068141%3A0xe5b0734cf65d3272!2sChilanzar-C%2C%20Tashkent%20100097%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1654086365816!5m2!1sen!2sus',
            phone: ['999'],
        },
        {
            id: 1,
            name: 'Filial N1',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23986.377538314657!2d69.205133!3d41.280636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a3b26068141%3A0xe5b0734cf65d3272!2sChilanzar-C%2C%20Tashkent%20100097%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1654086365816!5m2!1sen!2sus',
            phone: ['999'],
        },
        {
            id: 1,
            name: 'Filial N1',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23986.377538314657!2d69.205133!3d41.280636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a3b26068141%3A0xe5b0734cf65d3272!2sChilanzar-C%2C%20Tashkent%20100097%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1654086365816!5m2!1sen!2sus',
            phone: ['999'],
        },
    ]);

    return (
        <div className={styless.contact}>
            <div className={style.container}>
                <div className={styless.container}>
                    {data?.map((item, id) => {
                        return (
                            <div className={styless.box} key={id}>
                                <p className={styless.thema}>
                                    <strong>{item.name}</strong>
                                </p>
                                <iframe
                                    src={item.mapUrl}
                                    width="600"
                                    height="450"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                                <p className={styless.text}>
                                    <strong>
                                        Telefon raqamlar:
                                        {item.phone?.map((phoneItem, id) => (
                                            <React.Fragment key={id}>
                                                <br /> {phoneItem}
                                            </React.Fragment>
                                        ))}{' '}
                                    </strong>
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default contacts;
