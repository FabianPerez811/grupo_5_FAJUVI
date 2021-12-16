DELETE FROM fajuviDB.Categories;
ALTER TABLE fajuviDB.Categories AUTO_INCREMENT=1;

DELETE FROM fajuviDB.Sizes;
ALTER TABLE fajuviDB.Sizes AUTO_INCREMENT=1;

DELETE FROM fajuviDB.Roles;
ALTER TABLE fajuviDB.Roles AUTO_INCREMENT=1;

DELETE FROM fajuviDB.Products;
ALTER TABLE fajuviDB.Products AUTO_INCREMENT=1;

DELETE FROM fajuviDB.Users;
ALTER TABLE fajuviDB.Users AUTO_INCREMENT=1;

DELETE FROM fajuviDB.Carts;
ALTER TABLE fajuviDB.Carts AUTO_INCREMENT=1;

DELETE FROM fajuviDB.CartsProducts;
ALTER TABLE fajuviDB.CartsProducts AUTO_INCREMENT=1;

INSERT INTO fajuviDB.Categories(category) VALUES
("Pulseras"), ("Aros"), ("Cinturones"), ("Anillos");

INSERT INTO fajuviDB.Sizes(size) VALUES
("XS"), ("S"), ("M"), ("L"), ("XL");

INSERT INTO fajuviDB.Roles(role) VALUES
("Administrador"), ("Cliente");

INSERT INTO fajuviDB.Products(name, price, description, image, popular, sizeId, categoryId, deleted) VALUES
();
