import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 24px;
  background: #0f172a;
  color: #f8fafc;
`;

const Title = styled.h1`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  text-align: center;
  margin: 0;
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 640px;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  background: #1e293b;
`;

const RandomImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Button = styled.button`
  padding: 12px 28px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  background: #38bdf8;
  color: #0f172a;
  transition: transform 0.15s ease, background 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    background: #0ea5e9;
  }
`;

export function Estudo() {
  const [seed, setSeed] = useState(() => Date.now());

  const imageUrl = `https://picsum.photos/seed/${seed}/640/360`;

  return (
    <Container>
      <Title>Imagem aleatória</Title>
      <ImageWrapper>
        <RandomImage src={imageUrl} alt="Imagem aleatória" />
      </ImageWrapper>
      <Button onClick={() => setSeed(Date.now())}>Sortear outra</Button>
    </Container>
  );
}

export default Estudo;
