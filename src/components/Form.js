import React, { useState } from 'react';

const Form = ({getData}) => {

    const [search, setSearch] = useState({
        city: '',
        country:''
    })

    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
        console.log(search)
    }

    const consultWheater = e => {
        e.preventDefault();
        getData(search)
    }

    return ( 
        <form
            onSubmit={consultWheater}
        >
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="city"
                    id="city"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad"></label>
            </div>

            <div className="input-field col s12">
                <select onChange={handleChange} name="country">
                    <option value="">Selecciona un pais</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">Espana</option>
                    <option value="PE">Peru</option>
                    <option value="VE">Venezuela</option>

                </select>
            </div>

            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large
                btn-block yellow accent-4" value="Buscar Clima"/>
            </div>
        </form>
     );
}
 
export default Form;