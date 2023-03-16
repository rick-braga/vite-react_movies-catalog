//10 iniciando funcionalidade da busca
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import './Navbar.css';

const Navbar = () => {

    //11
    const [search, setSearch] = useState("");

    //13 usando useNavigate
    const navigate = useNavigate();

    //14
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!search) return;

        navigate(`/search?q=${search}`);

        setSearch("");

    }


  return (
    <nav id="navbar">
        <h2>
            <Link to="/"><BiCameraMovie /> React Movies Catalog</Link>
        </h2>
        {/* 14 inserindo o onSubmit */}
        <form onSubmit={handleSubmit}>
            {/* 12 inserindo o onChange */}
            <input 
            type="text" 
            placeholder="Busque um filme..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
            />
            <button type="submit"><BiSearchAlt2 /></button>
        </form>
    </nav>
  )
}

export default Navbar