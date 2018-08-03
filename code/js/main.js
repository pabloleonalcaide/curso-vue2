    Vue.component('films',{
        template: `
            <h1> Componente Películas </h1>
        `,
        mounted(){
            //whatever we need, like with Vue Instances
        }
    });
    Vue.component('fruits',{
        props: ['object'],
        template: `
            <div>
                <hr>
                <h2> Componente {{title}} </h2>
                <h4> La fruta especial es: {{object.name}}</h4>
            </div>
        `,
        mounted(){console.log(this.objecto)},  
        data(){
            return{
                title: 'Frutas',
            }
        }
    });
    Vue.component('inline',{
        props: ['object'],
        mounted(){},  
        data(){
            return{
                title: 'Frutas',
            }
        }
    });
    Vue.component('father',{
        template: `
            <div><h1> Componente Padre</h1>
                <div>
                    <child></child>
                </div>
            </div>
        `
    });
    Vue.component('child',{
        template: `<p style="background:teal;"> Párrafo del componente hijo </p>`
    });
    Vue.filter('uppercase', (value)=>value.toUpperCase());
    new Vue({
    el: "main",
    /**Mounted is like $(document).ready */
    mounted(){
        axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            this.posts = response.data;
        });
    },
    data: {
      choosenComponent: 'films',
      posts: null,
      text: "Hello from Vue2",
      name: "Pablo",
      surname: "Leon",
      note: 5,
      superheroes: ["Iroman", "Dr. Strange", "Hulk", "Wolverine", "Magneto"],
      newHero: null,
      search: '',
      confirm: null,
      fruits: [
        { name: "Manzana", season: "Invierno", price: "Bajo" },
        { name: "Naranja", season: "Otoño", price: "Medio" },
        { name: "Cereza", season: "Primavera", price: "Alto" },
        { name: "Melón", season: "Verano", price: "Bajo" },
        { name: "Sandía", season: "Verano", price: "Medio" }
      ],
      special_fruit: { name: "Aguacate", season: "Verano", price: "Muy Alto" }

    },
    methods: {
      add_hero() {
        this.superheroes.unshift(this.newHero);
        this.newHero = null;
      },
      remove_hero(index) {
        this.superheroes.splice(index, 1);
      },
      mark(index){
          this.confirm = index;
      }
    },
    computed:{
        nameAndSurname(){
            let date = new Date();
            let year = date.getFullYear();
            return this.name + " " + this.surname + " - Nota: " + this.note + " - " + "Año: "+ year;
        },
        orderedHeroes(){
            let orderedList = this.superheroes.concat().sort();
            return orderedList;
        },
        searchFruit(){
            return this.fruits.filter((fruit)=>  fruit.name.includes(this.search));
        }
    }
  });
  const vue2 = new Vue({
    el: '#app',
    data:{
        text: 'Segunda instancia de Vue'
    }
  });
 