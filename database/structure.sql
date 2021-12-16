CREATE DATABASE IF NOT EXISTS `fajuviDB`;
USE `fajuviDB`;

CREATE TABLE `Categories`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Sizes`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `size` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Roles`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `role` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Products` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `price` INT NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `popular` INT NOT NULL,
    `sizeId` INT NOT NULL,
    `categoryId` INT NOT NULL,
    `deleted` INT NOT null,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_sizeId`
    FOREIGN KEY (`sizeId`)
        REFERENCES `Sizes`(`id`),
    CONSTRAINT `fk_categoryId`
    FOREIGN KEY (`categoryId`)
        REFERENCES `Categories`(`id`)
);

CREATE TABLE `Users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(255) NOT NULL,
    `lasName` VARCHAR(255) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(255) NOT NULL,    
    `profileImage` VARCHAR(255) NOT NULL,
    `roleId` INT NOT NULL,
    `deleted` INT NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_roleId`
    FOREIGN KEY (`roleId`)
        REFERENCES `Roles`(`id`)
);

CREATE TABLE `Carts` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `userId` INT NOT NULL,
    `totalPrice` INT NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_userId`
    FOREIGN KEY (`userId`)
        REFERENCES `Users`(`id`)
);

CREATE TABLE `CartsProducts` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `cartId` INT NOT NULL,
    `productId` INT NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_cartId`
    FOREIGN KEY (`cartId`)
        REFERENCES `Carts`(`id`),
    CONSTRAINT `fk_productId`
    FOREIGN KEY (`productId`)
        REFERENCES `Products`(`id`)
);











