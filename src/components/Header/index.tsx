//next
import Image from "next/image";

//style
import * as S from "./styles";

//utils
import logo from '../../../public/images/logo.svg';

export default function Header(){
  return (
    <S.Header>
      <S.Container>
        <S.GitIcon>
          github
        </S.GitIcon>
        <Image 
          src={logo}
          width="128"
          height="128"
          alt="Pokemon Logo"
        />
        <S.BtnTheme>
          teste
        </S.BtnTheme>
      </S.Container>
    </S.Header>
  );
};