import React from 'react';
import { Link } from 'react-router-dom';

export default function Login(){
    return(
        <div>
            <form>
                <div>
                    <label>Email</label>
                    <input type="text"/>
                </div>
                
                <div>
                    <label>Password</label>
                    <input type="password"/>
                </div>

                <div>
                    <Link>Cadastrar</Link>
                </div>

                <button>Login</button>
            </form>
        </div>
    );
}