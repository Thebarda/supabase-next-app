"use client";

import { Box, Card, CardContent, Typography } from "@mui/material";

const Products = ({ products }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 250px)",
        rowGap: 2,
        columnGap: 2,
      }}
    >
      {products.map((product) => (
        <Card key={product.id}>
          <CardContent>
            <Typography variant="h4">{product.name}</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Typography variant="body1">{product.price}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Products;
