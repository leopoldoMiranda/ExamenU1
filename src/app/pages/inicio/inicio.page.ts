import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

//-----------------------------
 public pokemon:any;
 public pokemonImg:any;
 public pokemonImg2:any;
 public pokemonName:any;
 public mensaje:any;
 public nombreIngresado:string;
 public marcador:number = 0;
 public acertados: string =  "Aciertos: ";
 
  usuario = {
    email:'',
    password:''
  };
//-----------------------------
  constructor( private apiService: ApiService ) { }

  ngOnInit() {
    this.apiService.getInformacion().subscribe(
      result => {
         this.pokemon = result;
   
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonImg2 = this.pokemon.sprites.front_default;

        this.pokemonName = this.pokemon.name;
      })
  }


//-------------------------------------------------------
  confirmar(){
    console.log(this.marcador);
    
    if(this.nombreIngresado == this.pokemon.name){
      this.nombreIngresado="";
      this.marcador++;

    }else{
      
      this.nombreIngresado="";
     
        if(this.marcador <= 0){
          this.marcador--;

          
          this.acertados = "Perdiste vuele a intentarlo";
        }else{
          this.marcador--;
        }

    }
    
    this.apiService.getInformacion().subscribe(
      result => {
         this.pokemon = result;
        // this.pais = result.message;
        // console.log(result.message);
        // console.log(result);
        console.log(this.pokemon);
        console.log('----');
        console.log(this.pokemon.name);
        console.log(this.pokemon.sprites.front_default);
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonName = this.pokemon.name;
   
      },
      error => {
        console.log(<any> error);
      
      }
    )
console.log(this.marcador);
    
  }
//-------------------------------------------------------
reiniciar(){
  this.marcador = 0;
  this.acertados = "Aciertos: ";
}


}
