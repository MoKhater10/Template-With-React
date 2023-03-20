import styled from "styled-components"

export const ProfileSection = styled.div`
    padding: 50px 0;
    overflow: hidden;
`

export const ProfileDiv = styled.div`
    width: 50%;
    float: left;
`

export const ProfileUL = styled.ul`
    list-style: none
`

export const ProfileItem = styled.li`
    margin-bottom: 8px
`

export const ItemSpan = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold ;
    font-weight:${props => props.web =="" ? "normal": ""} ;
    color:${props => props.web ==""  ? "#eb5424": ""}
`

export const Skills = styled.div`
    width: 50%;
    float: left;
`
    

export const SkillsDesc = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

export const SkillsBar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const SkillsBarTitle = styled.span`
    float: left;
`

export const Precentage = styled.span`
    float: right;
    margin-right: 100px
`

export const ParentBar = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

export const ParentSpan = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${props=>props.id == 1? "100%" : props=>props.id == 2 ? "90%" : props=>props.id == 3 ? "80%":"" }
`

export const Title = styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
`

export const Span = styled.span`
    font-weight: normal;

`


