"use client";

import { Box, Card, CardContent, Typography } from "@mui/material";
import { Product } from "../models";

const Products = ({ products }: { products: Array<Product> }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 250px)",
        rowGap: 2,
        columnGap: 2,
      }}
    >
      {products.map(({ id, name, description, price }) => (
        <Card key={id}>
          <CardContent>
            <Typography variant="h4">{name}</Typography>
            <Typography variant="body1">{description}</Typography>
            <Typography variant="body1">{price}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Products;
