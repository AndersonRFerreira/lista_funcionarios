import React from 'react';
import {useState, useEffect} from 'react';

function Table () {

    const [employees, setEmployees] =useState([])

    async function getData(){
        const res = await fetch(" http://localhost:3004/employees")
        const result = await res.json()
        setEmployees(result) 
    }

    useEffect( ()=>{
        getData();
    }, []);

    return(
        <div className="table">
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nome</th>
                            <th>Cargo</th>
                            <th>Data de Admissão</th>
                            <th>Telefone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, key) =>{
                            return(
                                <tr key={key}>
                                    <td> <img className="avatar" src={employee.picture} alt="foto do funcionario"/></td>
                                    <td> {employee.name} </td>
                                    <td> {employee.position}</td>
                                    <td> {employee.admission}</td>
                                    <td> {employee.phone} </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;