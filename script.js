const quote = document.getElementById("quote");
const author = document.getElementById("author");
const shareXButton = document.getElementById("share-x");
const newQuoteButton = document.getElementById("new-quote");
const languageSelect = document.getElementById("quote-language");
const api_url = "https://dummyjson.com/quotes/random";
const translation_api_url = "https://api.mymemory.translated.net/get";

let currentQuote = null;
let translationRequestId = 0;

async function getquote(url = api_url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`A API respondeu com o status ${response.status}`);
        }

        currentQuote = await response.json();
        await displayQuote();
    } catch (error) {
        console.error("Não foi possível carregar uma frase:", error);
        quote.textContent = "Não foi possível carregar uma frase. Tente novamente.";
        author.textContent = "";
    }
}

async function displayQuote() {
    if (!currentQuote) {
        return;
    }

    const requestId = ++translationRequestId;
    author.textContent = currentQuote.author;

    if (languageSelect.value === "en") {
        quote.textContent = currentQuote.quote;
        return;
    }

    quote.textContent = "Traduzindo citação...";
    try {
        const translationUrl = new URL(translation_api_url);
        translationUrl.searchParams.set("q", currentQuote.quote);
        translationUrl.searchParams.set("langpair", "en|pt-BR");

        const response = await fetch(translationUrl);
        if (!response.ok) {
            throw new Error(`A API de tradução respondeu com o status ${response.status}`);
        }

        const data = await response.json();
        if (data.responseStatus !== 200 || !data.responseData.translatedText) {
            throw new Error(data.responseDetails || "A API não retornou uma tradução.");
        }

        if (requestId === translationRequestId) {
            quote.textContent = data.responseData.translatedText;
        }
    } catch (error) {
        console.error("Não foi possível traduzir a citação:", error);
        if (requestId === translationRequestId) {
            quote.textContent = `${currentQuote.quote} (tradução indisponível)`;
        }
    }
}

newQuoteButton.addEventListener("click", () => getquote());
languageSelect.addEventListener("change", displayQuote);

shareXButton.addEventListener("click", () => {
    const text = `${quote.textContent} — ${author.textContent}`;
    const shareUrl = new URL("https://x.com/intent/post");
    shareUrl.searchParams.set("text", text);
    window.open(shareUrl, "_blank", "noopener,noreferrer");
});

getquote(api_url);