import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import MarcaCard from "./MarcaCard";

test("should render MarcaCard", ()=>{
    render(
    <MarcaCard imagePath="imagem.png"/>
    )

    const imagem = screen.getByRole("img");
    expect(imagem).toHaveAttribute("src", "imagem.png")
})