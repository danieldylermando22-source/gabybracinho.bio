/* Função da Vercel: entrega o link do botão das bandeiras só para quem NÃO está no Brasil.
   O país vem do IP do visitante, informado pela própria Vercel no cabeçalho x-vercel-ip-country.
   Brasileiros (e qualquer acesso sem país identificado) recebem "negado" e nunca recebem o link. */

// TROQUE pelo seu link do botão das bandeiras:
const LINK_INTERNACIONAL = "https://paylume.fans/l/7c09c793

";

module.exports = function handler(req, res) {
  const pais = String(req.headers["x-vercel-ip-country"] || "").toUpperCase();

  res.setHeader("Cache-Control", "no-store");

  if (!pais || pais === "BR") {
    res.status(403).json({ ok: false });
    return;
  }

  res.status(200).json({ ok: true, url: LINK_INTERNACIONAL });
};
