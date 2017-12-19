
import {AES, DES, enc, MD5, SHA1, SHA256, SHA512} from "crypto-js";

export class Funcoes {
  public static CRIPTO_DES = "DES";
  public static CRIPTO_AES = "AES";
  public static HASH_MD5 = "MD5";
  public static HASH_SHA1 = "SHA-1";
  public static HASH_SHA256 = "SHA-256";
  public static HASH_SHA512 = "SHA-512";

  public cryptoAES(texto, key) {
    return AES.encrypt(enc.Utf8.parse(texto), key).toString();
  }

  public decryptoAES(texto, key) {
    return AES.decrypt(texto, key).toString(enc.Utf8);
  }

  public cryptoDES(texto, key) {
    return DES.encrypt(enc.Utf8.parse(texto), key).toString();
  }

  public decryptoDES(texto, key) {
    return DES.decrypt(texto, key).toString(enc.Utf8);
  }

  public hashMD5(texto) {
    return MD5(texto).toString();
  }

  public hashSha1(texto) {
    return SHA1(texto).toString();
  }

  public hash256(texto) {
    return SHA256(texto).toString();
  }

  public hash512(texto) {
    return SHA512(texto).toString();
  }
}
