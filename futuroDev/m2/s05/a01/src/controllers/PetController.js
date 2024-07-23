class PetController{

  //TODO: post/criar tá pronto, falta trazer os outros métodos pra cá

    async criar(req, res){
  
        try {
          const dados = req.body;
          console.log(dados);
        
          if(!dados.nome || !dados.idade || !dados.raca || !dados.tipo || !dados.responsavel) {
              res.status(400).json({mensagem: 'Dados inválidos'});
              return;
          }
          
          await conexao.query(
            `
              INSERT INTO pets (nome, idade, raca, tipo, responsavel) 
              VALUES ($1, $2, $3, $4, $5)
            ` ,[dados.nome, dados.idade, dados.raca, dados.tipo, dados.responsavel]);
        
          res.status(201).json({mensagem: 'Pet cadastrado com sucesso!'});
          
        } catch {
          res.status(500).json({mensagem: 'Não foi possível cadastrar o pet'});
        }
      
      }
  
    // from copilot
    // constructor(petService){
    //     this.petService = petService;
    // }
    // async getPet(req, res){
    //     const pet = await this.petService.getPet(req.params.id);
    //     res.json(pet);
    // }
    // async getPets(req, res){
    //     const pets = await this.petService.getPets();
    //     res.json(pets);
    // }
    // async createPet(req, res){
    //     const pet = await this.petService.createPet(req.body);
    //     res.json(pet);
    // }
    // async updatePet(req, res){
    //     const pet = await this.petService.updatePet(req.params.id, req.body);
    //     res.json(pet);
    // }
    // async deletePet(req, res){
    //     await this.petService.deletePet(req.params.id);
    //     res.json({message: 'Pet deleted'});
    // }
  }
  
  module.exports = new PetController();