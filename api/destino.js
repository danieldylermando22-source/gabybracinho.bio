/* Função da Vercel: decide quais links entregar pelo país do IP do visitante
   (cabeçalho x-vercel-ip-country, informado pela própria Vercel).
   - Brasil: recebe os links dos botões 1 e 2.
   - Fora do Brasil: recebe só o link do botão das bandeiras.
   - País não identificado: não recebe nada. */

const LINK_1 = "https://paylume.fans/l/7063e398?shk=cm5a01kz";
const LINK_2 = "https://pay.orionbot.space/p/gaby-bracynhoyy634";
const LINK_INTERNACIONAL = "https://paylume.fans/l/7c09c793?shk=wkxfa3rh";

module.exports = function handler(req, res) {
  const pais = String(req.headers["x-vercel-ip-country"] || "").toUpperCase();

  res.setHeader("Cache-Control", "no-store");

  if (!pais) {
    res.status(403).json({ ok: false });
    return;
  }

  if (pais === "BR") {
    res.status(200).json({ ok: true, br: true, links: { a: LINK_1, b: LINK_2 } });
    return;
  }

  res.status(200).json({ ok: true, br: false, url: LINK_INTERNACIONAL });
};
