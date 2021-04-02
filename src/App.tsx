import { useState } from "react";
import styled, { css } from "styled-components";
import logo from "./assets/img/logo.png";

interface Props {
  selected: boolean;
}

const Card = styled.div<Props>`
  font-family: "Roboto", sans-serif;
  display: block;
  margin: 5px 0;
  background-color: white;
  padding: 30px;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid
    ${(props: any) => (props.selected ? "var(--color-primary)" : "white")};
  transition: border 0.4s;

  .card-title {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    color: var(--color-primary);
  }

  &:hover {
    border-color: var(--color-primary);
  }
`;

interface ButtonProps {
  primary?: boolean;
}

const Button = styled.a<ButtonProps>`
  display: block;
  border-radius: 5px;
  padding: 1rem 2rem;
  margin-top: 5px;
  color: white;
  background: var(--color-primary);
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
`;

function App() {
  const [planos] = useState([
    {
      id: 1,
      name: "Básico",
      price: 1200,
    },
    {
      id: 2,
      name: "médio",
      price: 1330,
    },
    {
      id: 3,
      name: "Pro",
      price: 1450,
    },
  ]);

  const [selected, setSelected] = useState({ id: 0, name: "", price: 0 });

  return (
    <div className="container">
      <div className="main-wrapper">
        <div className="logo-wrapper">
          <div className="logo">
            <img src={logo} />
          </div>
        </div>
        <div className="title">Selecione um plano</div>
        {planos.map((plan, idx) => (
          <Card
            onClick={() => setSelected(plan)}
            selected={selected?.id === plan.id}
            key={idx}
          >
            <div className="card-title">Plano {plan.name}</div>
            <div>
              {plan.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </div>
          </Card>
        ))}
        <Button
          target="_blank"
          href={`https://wa.me/5587988589105?text=Olá eu gostaria de um site com o plano: \n ${selected.name}`}
          primary={true}
        >
          Finalizar
        </Button>
      </div>
    </div>
  );
}

export default App;
