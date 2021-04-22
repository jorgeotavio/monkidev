import { useHistory } from "react-router";
import styled from "styled-components";
import logo from "../../assets/img/logotipo.png";
import Button from "../../components/Button";

interface Props {
  selected?: boolean;
}

const Card = styled.div<Props>`
  font-family: "Roboto", sans-serif;
  display: block;
  margin: 20px 0;
  background-color: white;
  padding: 30px;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid white;
  transition: border 0.4s;

  .card-title {
    font-size: 20px;
    font-family: Roboto, sans-serif;
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

  .action {
    text-align: end;
    font-size: 18px;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    color: var(--color-primary);
    margin-left: auto;
  }

  &:hover {
    border-color: var(--color-primary);
  }

  @media only screen and (max-width: 600px) {
    padding: 15px;
  }
`;

function RequestJob() {
  const { push } = useHistory();

  return (
    <div className="container">
      <div className="main-wrapper">
        <div className="logo-wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="title logo-text">Monki Dev</div>
        <div className="title">Conheça o nossos produtos</div>
        <Card
          onClick={() => window.open("https://edonix.org?from=monkidev.com.br")}
        >
          <div className="card-title">{"📚"} Sistema Edonix</div>
          <div className="card-desc">
            O Edonix é um sistema escolar, está a todo vapor com novas
            implementações a cada instante, quem usa conhece a simplicidade e
            interface agradável de lidar com os problemas no gerenciamento
            escolar.{" "}
          </div>
          <div className="action">acesse edonix.org</div>
        </Card>
        <Card
          onClick={() => window.open("https://butique.co?from=monkidev.com.br")}
        >
          <div className="card-title">{"👜"} Catálogo Butique</div>
          <div className="card-desc">
            O catálogo online Butique, resolve o problema de muitos
            empreendedores digitais, onde sua simplicidade e beleza, traz uma
            ótima experiência de uso tanto para o dono da loja virtual, quanto
            para os seus clientes. Clique aqui e saiba mais!
          </div>
          <div className="action">acesse butique.co</div>
        </Card>
        <Button id="finish" onClick={() => push("request-job")}>
          Solicitar um serviço
        </Button>
      </div>
    </div>
  );
}

export default RequestJob;
