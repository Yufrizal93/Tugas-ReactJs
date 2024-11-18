export default function getAllProducts() {
  return [
    {
      id: 'ursa-pocket-(1)',
      slug: 'Ursa-pocket-pod',
      name: "Ursa pocket 30 watt",
      category: 'pod',
      price: 350_000,
      stock: 100,
      imageUrl: '/assets/images/ursapocket.jpg',
      description: `big capacity battery of ursa pocket can survive for 1 days`
    },
    {
      id: 'ursa-nano-(2)',
      slug: 'ursa-nano-pod',
      name: "ursa nano 25 watt",
      category: 'pod',
      price: 200_000,
      stock: 50,
      imageUrl: `/assets/images/ursa nano.jpg`,
      description: `Small size easy to bring everywhere`
    },
    {
      id: 'ursa-baby-(3)',
      slug: 'ursa-baby-pod',
      name: "ursa baby by lost vape",
      category: 'pod',
      price: 205_000,
      stock: 20,
      imageUrl: `/assets/images/ursa baby.jpg`,
      description: `small size perfect system and easy to use and charge`
    },
    { id: 'p-200-(4)',
      slug: 'P-200-mod',
      name: "Centaurus p 200",
      category: 'mod',
      price: 950_000,
      stock: 100,
      imageUrl: '/assets/images/p200.jpg',
      description: `big power to burn single coil and double coil`
    },
    { id: 'm-200-(5)',
      slug: 'm-200-mod',
      name: "centaurus m200",
      category: 'mod',
      price: 1_000_000,
      stock: 20,
      imageUrl: `/assets/images/m200.jpg`,
      description: `Complete version from p200`
    },

  ]
}