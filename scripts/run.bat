@echo off
title ShopEasy Runner

echo Starting ShopEasy...

cd ..

start cmd /k "cd frontend && npm run dev"

start cmd /k "cd services\product-service && npm run dev"

start cmd /k "cd services\search-service && npm run dev"

start cmd /k "cd services\cart-service && npm run dev"

start cmd /k "cd services\order-service && npm run dev"

start cmd /k "cd services\payment-service && npm run dev"

exit