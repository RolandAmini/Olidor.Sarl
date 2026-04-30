// app/productsData.ts
export interface Product {
  id: number;
  slug: string;
  image: string;
}

export const products: Product[] = [
  { id: 1, slug: "boule-totale",   image: "/unga.webp"       },
  { id: 2, slug: "mwisho-mam",     image: "/mamunga.webp"    },
  { id: 3, slug: "uji-total",      image: "/uji.webp"        },
  { id: 4, slug: "grain-de-cacao", image: "/unf.jpeg"        },
  { id: 5, slug: "intrants-pec",   image: "/07bB0-02.webp"   },
  { id: 6, slug: "f100-f75",       image: "/F100-2.webp"     },
  { id: 7, slug: "plumpy-nut",     image: "/PLUMP.webp"      },
  { id: 8, slug: "kit-pci",        image: "/PCI.webp"        },
];