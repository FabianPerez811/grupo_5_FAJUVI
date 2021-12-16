DELETE FROM fajuviDB.categories;
ALTER TABLE fajuviDB.categories AUTO_INCREMENT=1;

DELETE FROM fajuviDB.sizes;
ALTER TABLE fajuviDB.sizes AUTO_INCREMENT=1;

DELETE FROM fajuviDB.roles;
ALTER TABLE fajuviDB.roles AUTO_INCREMENT=1;

DELETE FROM fajuviDB.products;
ALTER TABLE fajuviDB.products AUTO_INCREMENT=1;

DELETE FROM fajuviDB.users;
ALTER TABLE fajuviDB.users AUTO_INCREMENT=1;

DELETE FROM fajuviDB.carts;
ALTER TABLE fajuviDB.carts AUTO_INCREMENT=1;

DELETE FROM fajuviDB.cartsProducts;
ALTER TABLE fajuviDB.cartsProducts AUTO_INCREMENT=1;

INSERT INTO fajuviDB.categories(category) VALUES
("Pulseras"), ("Aros"), ("Cinturones"), ("Anillos");

INSERT INTO fajuviDB.sizes(size) VALUES
("XS"), ("S"), ("M"), ("L"), ("XL");

INSERT INTO fajuviDB.roles(role) VALUES
("Administrador"), ("Cliente");

INSERT INTO fajuviDB.products(name, price, description, image, popular, sizeId, categoryId, deleted) VALUES
("Aros Marsellas", 1500, "Aros enchapados en plata", NULL, NULL, NULL, 2, 0),
("Aros Lyon", 900, "Aros fantasía", NULL, NULL, NULL, 2, 0),
("Cinturón Venecia", 1300, "Cinturón simil cuero negro", NULL, NULL, 2, 3, 0),
("Cinturón Roma", 1300, "Cinturón simil cuero marrón", NULL, NULL, 1, 3, 0),
("Cinturón Florencia", 2500, "Cinturón de cuero negro", NULL, NULL, 1, 3, 0);

INSERT INTO fajuviDB.users(firstName, lastName, email, password, profileImage, roleId, deleted) VALUES 
("María Victoria", "Barrionuevo", "vikibarrionuevo@gmail.com", "1234", NULL, 1, 0),
("Juan", "Seco", "juan@gmail.com", "123456", NULL, 1, 0),
("Fabian", "Perez", "fabip@gmail.com", "hola456", NULL, 1, 0),
("Virginia", "Ascárate", "virginiaasc@gmail.com", "9876hola", NULL, 1, 0);

INSERT INTO fajuviDB.carts(userId, totalPrice) VALUES 
(1, 1500), (2, 1300), (3, 900), (4, 1500);

INSERT INTO fajuviDB.cartsProducts(cartId, productID) VALUES 
(1, 1), (2, 3), (3, 2), (4,1);