import styled from "styled-components";
import {ReactComponent as filter} from "../../assets/icons/search.svg"
import {ReactComponent as setting} from "../../assets/icons/setting.svg"
import {ReactComponent as houses} from "../../assets/icons/houses.svg"


const Container=styled.div`
    display:flex;
    padding:var(--padding);
    padding-top:10px;
    padding-bottom:10px;
    gap:20px;

    align-items:center;
`
const Icons=styled.div``;
Icons.Setting=styled(setting)`
    margin-right:8px
`;
Icons.Filter=styled(filter)`
    margin-right:8px
`;
Icons.Houses=styled(houses)`
    margin-right:8px
`

export {Container,Icons}