import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const AppPage = () => {

    const [message, setMessage] = useState('');
    const { username } = useParams();

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = () => {
        fetch(`/chat/${username}`)
            .then(res => res.text())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
};

export default AppPage;