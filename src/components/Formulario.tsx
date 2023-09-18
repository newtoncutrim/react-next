import React from 'react';

export const Formulario = () => {
    return (
        <>
            <h2>Login</h2>
            <form action="/processar_login" method="POST"> {/* Ajuste o 'action' conforme necessário */}
                <div>
                    <label htmlFor="email">Email:</label> {/* Corrigi 'for' para 'htmlFor' */}
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label> {/* Corrigi 'for' para 'htmlFor' */}
                    <input type="password" id="senha" name="senha" required />
                </div>
                <div>
                    <input type="submit" value="Entrar" />
                </div>
            </form>
        </>
    );
}
