///////////////////////////////////////////////////////
Viikko 5
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
Lisätään teoksia Procedurella :
///////////////////////////////////////////////////////

               ETUNIMI | SUKUNIMI | TEOS | ISBN

CALL LisaaTeos('Aleksis','Kivi','Seitsemän Veljestä','9789510021590');
CALL LisaaTeos('Tuomas','Kyrö','Mielensäpahoittajan rakkaustarina','9789510487044');
CALL LisaaTeos('Tuomas','Kyrö','Mielensäpahoittaja','9789510366264');

/////////////////////////////////////////////////////
Lisätään vielä kirja jossa on kaksi kirjailijaa :
/////////////////////////////////////////////////////
CALL LisaaTeos('Lea','Pakkanen','Se Tapahtui Meille','9789512416349');
CALL LisaaTeos('Santeri','Pakkanen','Se Tapahtui Meille','9789512416349');

///////////////////////////////////////////////////////
Lisätään Asiakkaita :
///////////////////////////////////////////////////////

			IDASIAKAS | ETUNIMI | SUKUNIMI | OSOITE | PUHELINNUMERO

INSERT INTO asiakas VALUES(NULL,'Erkki','Metsälä','Kiannonkatu 1','0420591525');
INSERT INTO asiakas VALUES(NULL,'Sari','Ukkonen','Itätuulenkuja 39','0417239633');
INSERT INTO asiakas VALUES(NULL,'Ulpu','Tuukkanen','Korkeakoulunkatu 38','0408753440');

//////////////////////////////////////////////////////////////
Lisätään kirjoihin kolme kirjaa joissa on kaksi samanlaista :
//////////////////////////////////////////////////////////////

INSERT INTO Kirja VALUES(NULL,'6','Klassikot');
INSERT INTO Kirja VALUES(NULL,'7','Kotimainen kaunokirjallisuus');
INSERT INTO Kirja VALUES(NULL,'6','Klassikot');

/////////////////////////////////////////////////////
Tehdään lainaustapahtuma :
/////////////////////////////////////////////////////

Call Uusi_Lainaus('Sari','Ukkonen','Seitsemän Veljestä');

/////////////////////////////////////////////////////
Lainaus :
/////////////////////////////////////////////////////
SELECT LainausPVM, PalautusPVM, Etunimi, Sukunimi,Osoite,Puhelinnumero,Luokitus,Nimi, ISBN FROM Lainaus
JOIN asiakas ON lainaus.idAsiakas = asiakas.idAsiakas 
JOIN kirja ON lainaus.idKirja = kirja.idKirja 
JOIN teos ON teos.idTeos = kirja.idTeos;

/////////////////////////////////////////////////////
14 D
/////////////////////////////////////////////////////





