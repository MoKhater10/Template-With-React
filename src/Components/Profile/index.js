import React , {useState , useEffect} from 'react';

import {
    ProfileSection, ParentBar, ParentSpan, Precentage, ProfileDiv, ProfileItem, ItemSpan, ProfileUL,
    Skills,SkillsBar,SkillsBarTitle,SkillsDesc,Span,Title
} from './style';
import axios from 'axios';


const Profile = () => {

const [skills, setSkills] = useState([]);
    useEffect(() => {
        axios.get('js/data.json').then(res => { setSkills(res.data.Profile) })
    }, []);

    const ProfileSkills = skills.map((skillItem) => {
        return (
            <SkillsBar key={skillItem.id}>
                <SkillsBarTitle>{skillItem.title }</SkillsBarTitle>
                <Precentage>{skillItem.per}</Precentage>
                        <ParentBar>
                            <ParentSpan id={skillItem.id}></ParentSpan>
                        </ParentBar>
            </SkillsBar>
        )
    })
    
    return (
        <ProfileSection>
            <div className="container">
                <ProfileDiv>
                    <Title><Span>My </Span>Profile</Title>
                    <ProfileUL>
                        <ProfileItem>
                            <ItemSpan>Name</ItemSpan>
                            Mostafa Khater
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Birthday</ItemSpan>
                            29/9/1997
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Address</ItemSpan>
                            ElMahallah ElKubra
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Phone</ItemSpan>
                            01272410302
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Email</ItemSpan>
                            mostafa.khater17@gmail.com
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Website</ItemSpan>
                            <ItemSpan web="">www.google.com</ItemSpan>
                        </ProfileItem>
                    </ProfileUL>
                </ProfileDiv>
                
                <Skills>
                    <Title>Some <Span>skills</Span></Title>
                    <SkillsDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    <SkillsBar>
                        {ProfileSkills}
                    </SkillsBar>
                </Skills>   
            </div>
        </ProfileSection>
  );
} 

export default Profile;
