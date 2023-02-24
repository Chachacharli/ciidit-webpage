import { useParams } from "react-router-dom"
import { LineaTemplate } from "../components/LineaTemplate/LineaTemplate"

export const LineaInvestigacion = () =>{

    const {name} = useParams()

    return(
        <LineaTemplate linea = {name}> </LineaTemplate>
    )
}