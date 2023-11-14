import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoPokemonCadastrado({
            nome,
            funcao,
            imagem,
            time
        })
        setNome('')
        setFuncao('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para adicionar o Pokémon escolhido no seu time</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome do Pokémon ou número na Pokédex"
                    placeholder="Digite o nome do Pokémon escolhido"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Função do Pokémon"
                    placeholder="Exemplos: sweeper, spinner, defoger, harzard setter, phazer, speed control, baton passer "
                    valor={funcao}
                    aoAlterado={valor => setFuncao(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Exemplo: https://img.pokemondb.net/artwork/large/nomedopokemon.jpg"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Tipagem"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Adicionar Pokémon
                </Botao>
            </form>
        </section>
    )
}

export default Formulario