import styled from "styled-components";const Item = styled.div`  width: 300px;  min-height: 238px;  background-color: white;  padding-left: 16px;  padding-right: 16px;  position: relative;`;const Tag = styled.div`  background-color: ${props => props.bg || '#FFE37C'};  width: 112px;  height: 20px;  margin: 8px 0 0;  display: block;  text-align: center;`;const TagText = styled.p`  color: #A88230;  font: 700 12px/16px var(--font-Noto-sans);  letter-spacing: 0.03em;`const Action = styled.div`  display: flex;  justify-content: flex-start;  vertical-align: middle;  align-items: center;  margin-top: 4px;  height: 20px;`;const ActionImg = styled.img`  width: 20px;  height: 20px;  margin-right: 4px;`;const ActionTitle = styled.p`  font: 700 12px/20px var(--font-Noto-sans), normal;  letter-spacing: 0.03em;  color: var(--primary-blue-600);  margin: 6px 4px;`;const ActionDescription = styled.p`  font: 400 12px/20px var(--font-Noto-sans), normal;  color: #8292A4;  margin: 6px 0 5px 12px;`;const PriceBlock = styled.div`  display: flex;  flex-direction: row;  justify-content: space-between;  align-items: center;`;const LogoImg = styled.img`  display: block;  width: 140px;  height: 32px;`;const Price = styled.div`  font: 700 20px/28px var(--font-Noto-sans), normal;  display: flex;  flex-direction: row;  justify-content: center;  align-items: last baseline;`;const PriceLabel = styled.p`  font: 700 14px/22px var(--font-Noto-sans), normal;  font-size: 14px;  line-height: 22px;  margin-left: 4px;`;const Advantages = styled.div`  display: block;  min-height: 140px;;`;const AdvantagesItem = styled.p`  font: 400 12px/16px var(--font-Noto-sans), normal;  font-style: normal;  letter-spacing: 0.03em;  color: var(--black);  margin-bottom: 10px;`;const AdvantagesImg = styled.img`  width: 11px;  height: 8px;  margin-right: 4px;`;const Button = styled.button`  display: block;  position: absolute;  bottom: 0;  margin: 0 auto 10px;  width: 253px;  height: 48px;  background-color: var(--secondaty-green);  color: white;  letter-spacing: 0.1em;  text-transform: uppercase;  font-feature-settings: 'pnum' on, 'lnum' on;  border: none;  border-radius: var(--radii);`;export default function (product) {    return (        <Item>            {                product.tag                    ? <Tag><TagText>{product.tag}</TagText></Tag>                    : <Tag bg="transparent"/>            }            {                product.action                    ? (<Action> <ActionImg alt='image of star' src='/Subtract.svg'/>                        <ActionTitle>Aкция</ActionTitle>                        <ActionDescription>{product.action}</ActionDescription>                    </Action>)                    : (<Action/>)            }            <PriceBlock>                <LogoImg src={product.img} alt={product.name}/>                <Price>{product.amount}<PriceLabel>₴</PriceLabel></Price>            </PriceBlock>            <Advantages>                {product.advantages.map(adv => (                    <AdvantagesItem key={adv}>                        <AdvantagesImg src='/Vector.svg'/>{adv}</AdvantagesItem>                ))}            </Advantages>            <Button>Купить</Button>        </Item>    )}