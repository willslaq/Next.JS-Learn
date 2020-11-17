import { useState } from 'react';

function Home() {
    return (
        <>
            <h2>Home</h2>
            <Contador />
        </>
    )
}

function Contador() {
    const [contador, setContador] = useState(0);

    const adicionarContador = () => {
        setContador(contador + 1)
    }

    return (
        <div>
            <div>{contador}</div>
            <button
                onClick={adicionarContador}
            >
                Adicionar
            </button>
        </div>
    )
}

export default Home;