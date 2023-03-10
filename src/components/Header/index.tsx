//next
import Image from "next/image";

//style
import * as S from "./styles";

//utils
import logo from '../../../public/images/logo.svg';

//icons
import { DiGithubBadge } from "react-icons/di";
import Link from "next/link";

export default function Header(){
  return (
    <S.Header>
      <S.Container>
        <S.GitIcon>
          <Link href="https://github.com/pedro-costa22/pokenext">
            <DiGithubBadge className="iconGit"/>
          </Link>
        </S.GitIcon>
        <Image 
          src={logo}
          width="128"
          height="128"
          alt="Pokemon Logo"
        />
      </S.Container>
    </S.Header>
  );
};