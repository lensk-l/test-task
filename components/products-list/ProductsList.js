import styled from "styled-components";import ItemsBLock from "./Item/ItemsBLock";const Wrapper = styled.section`  display: flex;  margin: 0 auto;  position: relative;  width: 960px;  min-height: 415px;  background: var(--background-dark);`;const ItemsContainer = styled.div`  margin: 13px;  width: 933px`;const TitleBlock = styled.div`  display: flex;  border-radius: 8px 8px 0 0;  background: var(--primary-blue-400);`;const Title = styled.h5`  font: 700 13px/16px var(--font-Noto-sans);  margin: 12px 16px 12px;  letter-spacing: 0.01em;  color: #FFFFFF;`;let count = ['продукт', 'продукта', 'продуктов'];function pluralize (num, titles) {    let plural;    plural = num % 10 === 1 && num % 100 !== 11 ? 0 : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? 1 : 2;    switch (plural) {        case 0:            return titles[0];        case 1:            return titles[1];        case 2:            return titles[2];    }}export default function ({products}) {    return (        <Wrapper>            <ItemsContainer>                <TitleBlock>                    <Title>Вам подобрано  {products.length} {pluralize(products.length, count )}</Title>                </TitleBlock>                <ItemsBLock products={products}/>            </ItemsContainer>        </Wrapper>    )}