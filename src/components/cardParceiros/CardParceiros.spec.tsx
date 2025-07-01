import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import CardParceiros from "./CardParceiros";

test("should render cardParceiros", ()=>{
    render(
        <CardParceiros titulo="Parceiro" descricao="Lorem"/>
    );

    const titulo = screen.getByText("Parceiro");
    const descricao = screen.getByText("Lorem");

    expect(titulo).toBeInTheDocument();
    expect(descricao).toBeInTheDocument();
})