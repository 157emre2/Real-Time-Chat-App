import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AppPageComponent from "../components/AppPageComponent/AppPageComponent";

const AppPage = () => {

    const [message, setMessage] = useState('');
    const { id } = useParams();

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await axios.get(`http://localhost:4000/chat/${id}`);
                console.log(response.data);
                setMessage(response.data.username);
;            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }

        fetchUserData();
    }, [id]);

    return (
        <div>
            <AppPageComponent />
        </div>
    );
};

export default AppPage;