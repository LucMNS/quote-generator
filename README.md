# Citação do dia

Uma página simples para descobrir citações, alternar entre o texto original em inglês e uma tradução automática para português, e compartilhar a frase no X.

## Recursos

- Exibe uma citação aleatória e seu autor.
- Permite carregar outra citação.
- Alterna entre inglês e português.
- Compartilha a citação exibida pelo fluxo de publicação do X.
- Mostra uma mensagem caso não seja possível carregar ou traduzir a citação.

## Tecnologias e serviços

- HTML
- CSS
- JavaScript
- [DummyJSON Quotes API](https://dummyjson.com/quotes/random): fornece as citações originais em inglês.
- [MyMemory Translation API](https://mymemory.translated.net/): traduz as citações para português brasileiro.

> A tradução é automática e pode conter imprecisões. A obtenção e a tradução das citações dependem de serviços externos e de uma conexão com a internet.

## Como executar

1. Baixe ou clone este projeto.
2. Abra a pasta `projeto09-quote` no VS Code.
3. Inicie `index.html` no navegador. Para desenvolvimento, você também pode usar uma extensão como o Live Server.
4. Use o seletor para escolher o idioma, **Nova citação** para buscar outra frase ou **Compartilhar no X** para preparar uma publicação.

## Arquivos

```text
projeto09-quote/
├── index.html   # Estrutura da página
├── style.css    # Estilos e animações dos botões
├── script.js    # Busca, tradução e compartilhamento
└── README.md    # Informações do projeto
```

---

<p align="center">
  Desenvolvido por <a href="https://github.com/LucMNS"><b>LucMNS</b></a>
</p>