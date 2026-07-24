@echo off
title ShopEasy Installation

echo ===============================
echo Installing Frontend...
echo ===============================

cd ..

cd frontend
call npm install

echo.
echo ===============================
echo Installing Product Service...
echo ===============================

cd ..
cd services\product-service
call npm install

echo.
echo ===============================
echo Installing Search Service...
echo ===============================

cd ..
cd search-service
call npm install

echo.
echo ===============================
echo Installing Cart Service...
echo ===============================

cd ..
cd cart-service
call npm install

echo.
echo ===============================
echo Installing Order Service...
echo ===============================

cd ..
cd order-service
call npm install

echo.
echo ===============================
echo Installing Payment Service...
echo ===============================

cd ..
cd payment-service
call npm install

echo.
echo ===============================
echo Installation Completed!
echo ===============================

pause