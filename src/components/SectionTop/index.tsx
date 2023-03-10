import { useEffect, useState } from 'react';
import * as S from './styles';

//next
import Image from "next/image";
import pokeboll from '../../../public/images/img-pokeball-02.png';

export default function SectionTop(){

    return (
        <S.Section>
            <S.Content>
                <div className='text'>
                    <h2>Who is that Pokémon? </h2>
                    <p>O guia perfeito para quem quer caçar Pokémons pelo mundo</p>
                </div>

                <div className='pokeball'>
                    <Image 
                        src={pokeboll}
                        alt="Pokemon Logo"
                    />
                </div>
                
            </S.Content>
        </S.Section>
    );
};