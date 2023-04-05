const usuario = {
    nome: "",
    dataDeNascimento: "",
    email: "",
    senha: "",

    definirNome: function(nome) {
      this.nome = nome;
    },

    definirDataDeNascimento: function(dataDeNascimento) {
      this.dataDeNascimento = dataDeNascimento;
    },

    definirEmail: function(email) {
      this.email = email;
    },
    
    definirSenha: function(senha) {
      this.senha = senha;
    }
  };

usuario.definirNome("Mariah Ojeda")
usuario.definirDataDeNascimento("18/07/1993");
usuario.definirEmail("exemplo@exemplo.com");
usuario.definirSenha("123456");

console.log(usuario.nome);
console.log(usuario.dataDeNascimento);
console.log(usuario.email);
console.log(usuario.senha);

  