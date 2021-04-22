import { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/img/logotipo.png";
import Button from "../../components/Button";
import { smoothScrollTo } from "../../utils";

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

  .checked {
    position: relative;
    margin-left: auto;
    width: 15px;
    height: 15px;
    background-color: ${(props: any) =>
      props.selected ? "var(--color-primary)" : "white"};
    border: 2px solid var(--color-primary);
    border-radius: 50%;
  }

  .card-title {
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    color: var(--color-primary);
  }

  .card-desc {
    font-size: 18px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    color: var(--color-primary);
    margin: 10px 0px;
  }

  .price {
    font-size: 22px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    color: var(--color-primary);
  }

  &:hover {
    border-color: var(--color-primary);
  }

  @media only screen and (max-width: 600px) {
    padding: 15px;
  }
`;

function RequestJob() {
  const [planos] = useState([
    {
      id: 1,
      name: "Landing Page para campanha",
      desc: "Apenas 1 página",
      price: 900,
    },
    {
      id: 2,
      name: "Site Institucional Básico",
      desc: "De 4 a 8 páginas",
      price: 1199,
    },
    {
      id: 3,
      name: "Site Institucional Intermediário",
      desc: "De 4 a 8 páginas",
      price: 1499,
    },
    {
      id: 4,
      name: "Site Institucional Profissional",
      desc: "Mais que 8 páginas, com mais recursos para operações complexas",
      price: 2299,
    },
  ]);

  const [selected, setSelected] = useState({ id: 0, name: "", price: 0 });

  const actionSetSelected = (plan: any) => {
    let to = document.getElementById("finish")?.offsetTop;
    to = to ? to : 0;
    smoothScrollTo(0, to, 400);
    setSelected(plan);
  };

  return (
    <div className="container">
      <div className="main-wrapper">
        <div className="logo-wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="logo-text title">Monki Dev</div>
        <div className="title">Selecione um plano</div>
        {planos.map((plan, idx) => (
          <Card
            onClick={() => actionSetSelected(plan)}
            selected={selected?.id === plan.id}
            key={idx}
          >
            <div className="checked"></div>
            <div className="card-title">{plan.name}</div>
            {plan.desc && <div className="card-desc">{plan.desc}</div>}
            <div className="price">
              {plan.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </div>
          </Card>
        ))}
        <Button
          id="finish"
          onClick={() =>
            window.open(
              `https://wa.me/5587988589105?text=Olá eu gostaria de um site com o plano: \n ${selected.name}`,
              "_blank"
            )
          }
          primary={true}
          disabled={selected?.id === 0}
        >
          Finalizar
        </Button>
      </div>
    </div>
  );
}

export default RequestJob;
