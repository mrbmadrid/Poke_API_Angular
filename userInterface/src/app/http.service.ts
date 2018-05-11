import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  	this.getOne(1);
  }

  getAll(){
  	let pokemon = this._http.get('https://pokeapi.co/api/v2/pokemon');
  	pokemon.subscribe(data => { console.log("All Pokemon:", data) });
  }

  getOne(id){
  	let pokemon = this._http.get('https://pokeapi.co/api/v2/pokemon/'+id);
  	pokemon.subscribe(data => {
  		let name = data.name;
  		let abilities = data.abilities;
  		console.log(name + " has " + abilities.length + " abilities!")
  		for(let ability of abilities){
  			let shared = this._http.get('https://pokeapi.co/api/v2/ability/'+ability.ability.name)
  			shared.subscribe(data => {
  				console.log(ability.ability.name)
  				console.log(data.pokemon.length + " other pokemon have this ability.")
  			})
  		}
  	});
  }
  getAbilities(id){
  	let abilities = this._http.get('https://pokeapi.co/api/v2/ability')
  	abilities.subscribe(data => {
  		console.log("Abilities:", data)
  	})
  }

  getSpecial(id){
  	let pokemon = this._http.get('https://pokeapi.co/api/v2/pokemon');
  	pokemon.subscribe(data => { 
  		console.log("All Pokemon:", JSON.stringify(data)
  	})
  }

}
