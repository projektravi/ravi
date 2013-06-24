// Dekodiert einen UTF8-kodierten String
function rhDecodeUtf8(s) {
  return decodeURIComponent(escape(s));
}
