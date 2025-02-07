import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'b90usnaw',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2025-01-13',
  token: 'skm9koaJBGEZkCplWlF2XDAhb6hGOT3I6WVPk0bRqH8MoK9pUVotGCNz8Y5zQVwMoHli63YlSeGOz1mnDrwmn2s0AzOSnSZFG0166yA1xgc8RQ0IiczWERRIGcwNB7x0gdTsvIwyOj9R2BgGuv1gLNgPk5DzIDozLk1bPqCaAgvVgB7Z52CD',
});

async function importProducts() {
  try {
    const response = await fetch('https://helicopter-api-nine.vercel.app/api/helicopters');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

async function uploadProduct(product) {
  try {
    const document = {
      _type: "helicopter", // Matches the schema type
      name: product.name,
      image: undefined, // Skipping image upload
      price: parseInt(product.price, 10), // Ensure the price is stored as a number
      description: product.description || "No description available",
      features: product.features || [],
      category: product.category || "Uncategorized",
      stockLevel: product.stockLevel || 0,
      isFeatured: product.isFeatured || false,
    };

    const createdProduct = await client.create(document);
    console.log(`Product ${product.name} uploaded successfully:`, createdProduct);
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

importProducts();
 