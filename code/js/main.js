window.onload = function(){
    new Vue({
        el: 'main',
        data:{
            text: 'Hello from Vue2',
            name: 'default name',
            note: 5,
            superheroes: ['Iroman', 'Dr. Strange','Hulk','Wolverine','Magneto'],
            fruits:[
                {name: 'Manzana', season:'Invierno', price: 'Bajo'},
                {name: 'Naranja', season:'Otoño', price: 'Medio'},
                {name: 'Cereza', season:'Primavera', price: 'Alto'},
                {name: 'Melón', season:'Verano', price: 'Bajo'},
                {name: 'Sandía', season:'Verano', price: 'Medio'}
            ]
        }
        });
}
/** v-model allow two way data-binding */