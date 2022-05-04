// na classe link 
//este metodo faz com que removamos o link do mundo, então, a restrição entre a corda e a fruta que usava o link, é desfeita.
detach()
    {
      World.remove(engine.world,this.link);
     
    }



//no sketch

//chama o método break da classe corda que desfaz a restrição entre dois corpos
//chama o metodo detach da classe link que remove o link do mundo
//passa para a restrição da fruta o valor nulo para que não dê erro de execução
function drop()
{
  rope.break();
  fruit_con.detach();
  fruit_con = null; 
}



//no sketch, na função setup
//cria uma imagem que funciona como botão
//dá uma posição ao botão
//dá um tamanho ao botão
//chama a função do p5 mouseClicked onde passamos como parametro a função o drop criada para soltar a fruta
  button = createImg('cut_btn.png');
  button.position(200,30);
  button.size(50,50);
  button.mouseClicked(drop);

