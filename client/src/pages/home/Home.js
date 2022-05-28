import React, {useEffect, useState} from 'react';
import './home.scss';
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import {v4 as uuid} from "uuid";
import {listService} from "../../services/list.service";

const Home = ({type}) => {
    console.log('type = ', type)
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
    useEffect(() => {
        const controller = new AbortController();
        const getRandomLists = async () => {
            try {
                const res = await listService.getAll(type,genre);
                setLists(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getRandomLists();
        return () => {
            controller.abort();
            setLists([]);
            setGenre(null);
        }
    }, [type, genre])
    return (
        <div className="home">
            <Navbar/>
            <Featured type={type} setGenre={setGenre}/>
            {lists.map(list => (

                <List key={uuid()} list={list} />
            ))}
        </div>
    );
};

export default Home;