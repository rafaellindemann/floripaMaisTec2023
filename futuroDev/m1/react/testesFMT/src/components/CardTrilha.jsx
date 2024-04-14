import * as PropTypes from "prop-types"

function CardTrilha(props) {
  return (
    <>
        <h1>{props.dadosTrilha.nomeTrilha}</h1> 
        <div>{props.dadosTrilha.cidade}/{props.dadosTrilha.estado}</div>
        <img width={200} src={props.dadosTrilha.urlImagem} alt="Imagem da trilha para crianças" />
        {/* <img width={200} src="./images/trilhaInfantil.webp" alt="Imagem da trilha para crianças" /> */}
    </>
  )
}

CardTrilha.propTypes = {
    dadosTrilha: PropTypes.exact({
        nomeTrilha: PropTypes.string.isRequired,
        cidade: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired,
        duracao: PropTypes.number.isRequired,
        trajeto: PropTypes.number.isRequired,
        dificuldade: PropTypes.string.isRequired,
        // enum
        tipo: PropTypes.oneOf(['caminhada / trekking', 'ciclismo']),
        nomeUsuario: PropTypes.string.isRequired,
        urlImagem: PropTypes.string.isRequired
    })
}
export default CardTrilha
