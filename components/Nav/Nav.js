import styled from "styled-components";import Link from "next/link";import {useRouter} from "next/router";const NavBar = styled.nav`  width: 960px;  display: flex;  margin: 0 auto;  flex-direction: row;  justify-content: end;  gap: 20px;`;const LinkButton = styled.a`  cursor: pointer;`const LinkImg = styled.img`  width: 30px;`export default function () {    let router = useRouter();    return (        <NavBar>            <Link href={router.asPath} locale="ua">                <LinkButton><LinkImg src="/ukrain.svg" alt="ukrainian"/></LinkButton>            </Link>            <Link href={router.asPath} locale="ru" >                <LinkButton><LinkImg src="/russ.svg" alt="russian"/></LinkButton>            </Link>        </NavBar>    )}