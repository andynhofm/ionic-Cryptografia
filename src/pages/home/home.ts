import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Funcoes } from "./funcoes";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tipos = [Funcoes.CRIPTO_AES, Funcoes.CRIPTO_DES,Funcoes.HASH_MD5, Funcoes.HASH_SHA1, Funcoes.HASH_SHA256, Funcoes.HASH_SHA512];

  funcoes = new Funcoes();

  texto: string = "";
  chave: string = "";
  tipo: string = Funcoes.CRIPTO_AES;
  resultado: string = "";

  constructor(public navCtrl: NavController) {
  }

  mensagem(texto, chave, validarChave: boolean) {
    if (texto == null || texto.length == 0) {
      this.resultado = "Informe o texto";
      return false;
    }

    if (validarChave && (chave == null || chave.length == 0)) {
      this.resultado = "Informe a chave";
      return false;
    }

    return true;
  }

  cifrar() {
    switch (this.tipo) {
      case Funcoes.CRIPTO_AES:
        if (!this.mensagem(this.texto, this.chave, true)) return;
        this.resultado = this.funcoes.cryptoAES(this.texto, this.chave)
        break;
      case Funcoes.CRIPTO_DES:
        if (!this.mensagem(this.texto, this.chave, true)) return;
        this.resultado = this.funcoes.cryptoDES(this.texto, this.chave)
        break;
      case Funcoes.HASH_MD5:
        if (!this.mensagem(this.texto, this.chave, false)) return;
        this.resultado = this.funcoes.hashMD5(this.texto)
        break;
      case Funcoes.HASH_SHA1:
        if (!this.mensagem(this.texto, this.chave, false)) return;
        this.resultado = this.funcoes.hashSha1(this.texto)
        break;
      case Funcoes.HASH_SHA256:
        if (!this.mensagem(this.texto, this.chave, false)) return;
        this.resultado = this.funcoes.hash256(this.texto)
        break;
      case Funcoes.HASH_SHA512:
        if (!this.mensagem(this.texto, this.chave, false)) return;
        this.resultado = this.funcoes.hash512(this.texto)
        break;
    }
  }

  decifrar() {
    switch (this.tipo) {
      case Funcoes.CRIPTO_AES:
        this.resultado = this.funcoes.decryptoAES(this.resultado, this.chave)
        break;
      case Funcoes.CRIPTO_DES:
        this.resultado = this.funcoes.decryptoDES(this.resultado, this.chave)
        break;
    }
  }
}
