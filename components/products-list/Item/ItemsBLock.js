import styled from "styled-components";import Item from "./Item";const ItemsBLock = styled.div`  display: flex;  flex-direction: row;  gap: 16px;  flex-wrap: wrap;`;export default function ({products}){    return(        <ItemsBLock>            {/*{products.map(product => (*/}            {/*    <Item key={product.id} {...product}/>*/}            {/*))}*/}        </ItemsBLock>    )}