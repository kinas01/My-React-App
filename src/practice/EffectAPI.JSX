
import { useState, useEffect } from "react";

function UserAPI() {
    const {user, setUser} = useState([]);
    const {loading, setLoading} = useState(true);


    useEffect(() => {
    function fectUser() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = response.json();
        setUser(data);
        setLoading(false);

        fectUser();

}

} []);