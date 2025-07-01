import { test, expect, vi } from "vitest"
import {screen, render} from "@testing-library/react"
import ModalProduto from "./modalProduto"
import "@testing-library/jest-dom/vitest"
import userEvent from "@testing-library/user-event";

test("modal should render", ()=>{
     const setIsModalOpen = vi.fn();

    render(
        <ModalProduto 
        titulo="Iphone" 
        preco={2000} 
        imagePath="Celular.png" 
        setIsModalOpen={setIsModalOpen}/>
    )

    const titulo = screen.getByText("Iphone");
    const preco = screen.getByText("R$ 2.000,00");
    const imagem = screen.getByRole("img");

    expect(titulo).toBeInTheDocument();
    expect(preco).toBeInTheDocument();
    expect(imagem).toHaveAttribute("src", "Celular.png")
})

test("modal should close when press X button", async ()=>{
    const setIsModalOpen = vi.fn();

    render(
        <ModalProduto 
        titulo="Iphone" 
        preco={2000} 
        imagePath="Celular.png" 
        setIsModalOpen={setIsModalOpen}/>
    )

    const btnFechar = screen.getByText("X");
    btnFechar.click()

    expect(setIsModalOpen).toHaveBeenCalledWith(false)
})

test("quantity should increase and decrease correctly", async ()=>{
    const setIsModalOpen = vi.fn();

    render(
        <ModalProduto 
        titulo="Iphone" 
        preco={2000} 
        imagePath="Celular.png" 
        setIsModalOpen={setIsModalOpen}/>
    )
    
    const botoes = screen.getAllByRole("button");
    const botaoMenos = botoes.find(btn => btn.textContent === "-");
    const botaoMais = botoes.find(btn => btn.textContent === "+");
    const input = screen.getByRole("spinbutton");

    expect(input).toHaveValue(0);

    if (botaoMais) {
    await userEvent.click(botaoMais);
    expect(input).toHaveValue(1);
    }

    if (botaoMenos) {
        await userEvent.click(botaoMenos);
        expect(input).toHaveValue(0);
    }

    if (botaoMenos) {
        await userEvent.click(botaoMenos);
        expect(input).toHaveValue(0);
    }
    
})