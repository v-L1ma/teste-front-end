import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProdutoCard from "./produtoCard";
import "@testing-library/jest-dom/vitest";
import { expect, test } from "vitest";

test("should render produtoCard", ()=>{
    render(
    <ProdutoCard
      titulo="Iphone"
      preco={2000}
      imagePath="imagem.jpg"
    />
  );

  const titulo = screen.getByText("Iphone");
  const preco = screen.getByText("R$ 2.000,00");
  const img = screen.getByRole("img")

  expect(titulo).toBeInTheDocument();
  expect(preco).toBeInTheDocument();
  expect(img).toHaveAttribute("src", "imagem.jpg")
})

test("should open the modal when click on COMPRAR", async () => {
  render(
    <ProdutoCard
      titulo="Iphone"
      preco={2000}
      imagePath="imagem.jpg"
    />
  );

  const botaoComprar = screen.getByText("COMPRAR");
  await userEvent.click(botaoComprar);

  const titulos = await screen.findAllByText("Iphone");
  expect(titulos.length).toBeGreaterThan(1);
  expect(titulos[1]).toBeInTheDocument();
});
