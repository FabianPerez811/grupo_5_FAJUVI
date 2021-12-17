CREATE DATABASE IF NOT EXISTS `fajuviDB`;
USE `fajuviDB`;

CREATE TABLE `categories`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `roles`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `role` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `sizes`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `size` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `price` INT NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255),
    `categoryId` INT,
    `deleted` INT NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_categoryId`
    FOREIGN KEY (`categoryId`)
        REFERENCES `categories`(`id`)
);

CREATE TABLE `products_sizes`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `productId` INT NOT NULL,
    `sizeId` INT NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_prodId`
    FOREIGN KEY (`productId`)
        REFERENCES `products`(`id`),        
    CONSTRAINT `fk_szId`
    FOREIGN KEY (`sizeId`)
        REFERENCES `sizes`(`id`)
);

CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(255) NOT NULL,    
    `profileImage` VARCHAR(255),
    `roleId` INT,
    `deleted` INT NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_roleId`
    FOREIGN KEY (`roleId`)
        REFERENCES `roles`(`id`)
);

CREATE TABLE `carts` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `userId` INT NOT NULL,
    `totalPrice` INT NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_userId`
    FOREIGN KEY (`userId`)
        REFERENCES `users`(`id`)
);

CREATE TABLE `cartsProducts` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `cartId` INT NOT NULL,
    `productId` INT NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_cartId`
    FOREIGN KEY (`cartId`)
        REFERENCES `carts`(`id`),
    CONSTRAINT `fk_productId`
    FOREIGN KEY (`productId`)
        REFERENCES `products`(`id`)
);









