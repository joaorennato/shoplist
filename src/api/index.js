import AsyncStorage from '@react-native-async-storage/async-storage';

/*
let produtos = [{
    id: 1,
    nome: 'Tomate',
    quantidade: 1,
    preco: 2.45,
    done: false,
},{
    id: 2,
    nome: 'Laranja',
    quantidade: 12,
    preco: 1.60,
    done: true,
},{
    id: 3,
    nome: 'Pimentão',
    quantidade: 2,
    preco: 3,
    done: false,
},{
    id: 4,
    nome: 'Cebola',
    quantidade: 6,
    preco: 7.82,
    done: false,
},{
    id: 5,
    nome: 'Uva',
    quantidade: 2,
    preco: 8.5,
    done: false,
},{
    id: 6,
    nome: 'Pepino',
    quantidade: 5,
    preco: 2.74,
    done: false,
}];

AsyncStorage.setItem('produtos', JSON.stringify(produtos));
*/

let produtos = [];

export default {
    getLista: async () => {
        pegaItems = await AsyncStorage.getItem('produtos');
        //lista = JSON.parse(pegaItems) || produtos;
        if(JSON.parse(pegaItems)){
            lista = JSON.parse(pegaItems);
        } else {
            await AsyncStorage.setItem('produtos', JSON.stringify(produtos));
            pegaItems = await AsyncStorage.getItem('produtos');
            lista = JSON.parse(pegaItems);
        }

        return lista;
    },

    setLista: async (lista) => {
        await AsyncStorage.setItem('produtos', JSON.stringify(lista));
    },

    addProduct: async (nome, quantidade, preco) => {
        let oldProdutos = await AsyncStorage.getItem('produtos');
        items = JSON.parse(oldProdutos);
        newItem = {
            id: Math.random(Date.now()),
            nome: nome,
            quantidade: parseInt(quantidade),
            preco: parseFloat(preco).toFixed(2),
            done: false
        };

        items = [newItem, ...items];

        return items;
    },

    editProduct: async(produto) => {
        let oldProdutos = await AsyncStorage.getItem('produtos');
        let items = JSON.parse(oldProdutos);
        items.forEach(item => {
            if(item.id === produto.id){
                item.nome = produto.nome;
                item.quantidade = produto.quantidade;
                item.preco = produto.preco;
            }
        });

        return items;
    },

    getTotal: async () => {
        let allProdutos = await AsyncStorage.getItem('produtos');
        let items = JSON.parse(allProdutos);

        let total = 0;

        if(items.length > 0) {
            items.forEach(item => {
                if(!isNaN(item.quantidade) && !isNaN(item.preco)){
                    total = total + ((item.quantidade)*(item.preco));
                }   
            });
        }

        return parseFloat(total).toFixed(2);
    },

    toggleDone: async (id) => {
        let oldProdutos = await AsyncStorage.getItem('produtos');
        let items = JSON.parse(oldProdutos);

        items.forEach(item => {
            item.id === id ? item.done = !item.done : null;
        });

        return items;
    }
}