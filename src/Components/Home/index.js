import React from 'react';
import {HomeSection , HomeInformation , HomeTitle , HomeInfo , HomeDesc, Span, HomeBtn} from './style.js'

const Home = () => {
    return (
    <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle> Mostafa Khater </HomeTitle>
                    <HomeInfo>Creative Developer</HomeInfo>
                    <HomeDesc>
                        Iam a  <Span>Front-End Developer</Span> and professional creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection> 
  );
} 

export default Home;
