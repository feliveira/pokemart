export interface ProductType {
    id: number
    imageUrl: string
    name: string
    description: string
    price: number,
}
  
export const products: ProductType[] = [
{
    id: 1,
    imageUrl: '/products/pokeball.png',
    name: 'Poké Ball',
    description: 'A escolha confiável para capturar Pokémon em sua jornada.',
    price: 200,
},
{
    id: 2,
    imageUrl: '/products/greatball.png',
    name: 'Great Ball',
    description: 'Aumente suas chances de captura com a Great Ball.',
    price: 600,
},
{
    id: 3,
    imageUrl: '/products/ultraball.png',
    name: 'Ultra Ball',
    description: ' Capture Pokémon extraordinários com a Ultra Ball.',
    price: 1200,
},
{
    id: 4,
    imageUrl: '/products/potion.png',
    name: 'Potion',
    description: 'Mantenha seus Pokémon saudáveis com as nossas Poções.',
    price: 300,
},
{
    id: 5,
    imageUrl: '/products/superpotion.png',
    name: 'Super Potion',
    description: 'Cure e fortaleça seus Pokémon com a Super Potion.',
    price: 700,
},
{
    id: 6,
    imageUrl: '/products/hyperpotion.png',
    name: 'Hyper Potion',
    description: 'Recupere rapidamente os HP de seus Pokémon com a Hyper Potion.',
    price: 1200,
},
{
    id: 7,
    imageUrl: '/products/maxpotion.png',
    name: 'Max Potion',
    description: 'Restaure completamente a saúde de seus Pokémon com a Max Potion.',
    price: 2500,
},
{
    id: 8,
    imageUrl: '/products/fullrestore.png',
    name: 'Full Restore',
    description: 'O tratamento real para seus Pokémon, curando HP e condições de status.',
    price: 3000,
},
{
    id: 9,
    imageUrl: '/products/repel.png',
    name: 'Repel',
    description: 'Evite encontros indesejados com o Repel e siga em frente.',
    price: 350,
},
{
    id: 10,
    imageUrl: '/products/superrepel.png',
    name: 'Super Repel',
    description: 'Reduza ao máximo encontros aleatórios com o Super Repel.',
    price: 500,
},
{
    id: 11,
    imageUrl: '/products/maxrepel.png',
    name: 'Max Repel',
    description: 'Mantenha Pokémon selvagens à distância durante a sua busca com o Max Repel.',
    price: 700,
},
]