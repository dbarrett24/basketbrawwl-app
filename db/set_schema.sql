DROP TABLE IF EXISTS teams, players;

-- teams
CREATE TABLE teams (
    id SERIAL,
    name VARCHAR(255) PRIMARY KEY,
    logo text
);

INSERT INTO teams(name, logo)
VALUES
('Atlanta Hawks', '../public/images/TeamLogos-Edited/Roster-Size/hawks.svg'),
('Boston Celtics', '../public/images/TeamLogos-Edited/Roster-Size/celtics.svg'),
('Brooklyn Nets', '../public/images/TeamLogos-Edited/Roster-Size/nets.svg'),
('Charlotte Hornets', '../public/images/TeamLogos-Edited/Roster-Size/hornets.svg'),
('Chicago Bulls', '../public/images/TeamLogos-Edited/Roster-Size/bulls.svg'),
('Cleveland Cavaliers', '../public/images/TeamLogos-Edited/Roster-Size/cavs.svg'),
('Dallas Mavericks', '../public/images/TeamLogos-Edited/Roster-Size/mavs.svg'),
('Denver Nuggets', '../public/images/TeamLogos-Edited/Roster-Size/nuggets.svg'),
('Detroit Pistons', '../public/images/TeamLogos-Edited/Roster-Size/pistons.svg'),
('Golden State Warriors', '../public/images/TeamLogos-Edited/Roster-Size/warriors.svg'),
('Houston Rockets', '../public/images/TeamLogos-Edited/Roster-Size/rockets.svg'),
('Indiana Pacers', '../public/images/TeamLogos-Edited/Roster-Size/pacers.svg'),
('LA Clippers', '../public/images/TeamLogos-Edited/Roster-Size/clippers.svg'),
('Los Angeles Lakers', '../public/images/TeamLogos-Edited/Roster-Size/lakers.svg'),
('Memphis Grizzlies', '../public/images/TeamLogos-Edited/Roster-Size/grizzlies.svg'),
('Miami Heat', '../public/images/TeamLogos-Edited/Roster-Size/heat.svg'),
('Milwaukee Bucks', '../public/images/TeamLogos-Edited/Roster-Size/bucks.svg'),
('Minnesota Timberwolves', '../public/images/TeamLogos-Edited/Roster-Size/wolves.svg'),
('New Orleans Pelicans', '../public/images/TeamLogos-Edited/Roster-Size/pelicans.svg'),
('New York Knicks', '../public/images/TeamLogos-Edited/Roster-Size/knicks.svg'),
('Oklahoma City Thunder', '../public/images/TeamLogos-Edited/Roster-Size/thunder.svg'),
('Orlando Magic', '../public/images/TeamLogos-Edited/Roster-Size/magic.svg'),
('Philadelphia 76ers', '../public/images/TeamLogos-Edited/Roster-Size/sixers.svg'),
('Phoenix Suns', '../public/images/TeamLogos-Edited/Roster-Size/suns.svg'),
('Portland Trail Blazers', '../public/images/TeamLogos-Edited/Roster-Size/trailblazers.svg'),
('Sacramento Kings', '../public/images/TeamLogos-Edited/Roster-Size/kings.svg'),
('San Antonio Spurs', '../public/images/TeamLogos-Edited/Roster-Size/spurs.svg'),
('Toronto Raptors', '../public/images/TeamLogos-Edited/Roster-Size/raptors.svg'),
('Utah Jazz', '../public/images/TeamLogos-Edited/Roster-Size/jazz.svg'),
('Washington Wizards', '../public/images/TeamLogos-Edited/Roster-Size/wizards.svg');


-- players
CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    playerName VARCHAR(255),
    team text REFERENCES teams(name),
    position text,
    years text,
    mpg text,
    fgPct text,
    threePtPct text,
    ftPct text,
    ppg text,
    rpg text,
    apg text,
    bpg text,
    stls text,
    plusMinus text,
    headImg text,
    restImg text,
    winImg text,
    loseImg text,
    teamlogo text
    
);

-- INSERT INTO players(teamId, name, headImg, restImg, winImg, loseImg, points) VALUES
-- (1, 'Carmelo', 'a','a','a','a');

INSERT INTO players (playername, team, position, years, mpg, fgPct, threePtPct, ftPct, ppg, rpg, apg, bpg, stls, plusMinus, headImg, restImg, winImg, loseImg, teamlogo)
    VALUES 
        -- HAWKS
        ('Kent Bazemore','Atlanta Hawks','SF','4','18.6','42.3','34.6','69.1','7.3','2.7','1.5','0.4','1.2','-2.1','../../images/Player heads/Hawks/KentBazemore.png','','','','../../images/logo-behind-player/hawks.svg'),
        ('DeAndre Bembry','Atlanta Hawks','SF','0','9.6','47.6','0','42.9','2.8','1.4','0.7','0.1','0.2','-1.5','../../images/Player heads/Hawks/DeAndreBembry.png','','','','../../images/logo-behind-player/hawks.svg'),
        ('Jose Calderon','Atlanta Hawks','PG','11','28.2','47.3','41','87.5','9.6','2.5','6.3','0.1','0.3','-3.9','../../images/Player heads/Hawks/JoseCalderon.png','','','','../../images/logo-behind-player/hawks.svg'),
        ('Malcolm Delaney','Atlanta Hawks','PG','0','17.3','37.6','23.2','78.6','5.4','1.7','2.6','0','0.6','0.4','../../images/Player heads/Hawks/MalcolmDelaney.png','','','','../../images/logo-behind-player/hawks.svg'),
        ('Mike Dunleavy','Atlanta Hawks','SG','15','27.9','44.1','37.7','80.3','11.3','4.3','2.2','0.3','0.3','-0.5','../../images/Player heads/Hawks/MikeDunleavy.png','','','','../../images/logo-behind-player/hawks.svg'),
        ('Tim Hardaway Jr.','Atlanta Hawks','SG','3','23','42.6','35.2','80.2','10.8','2','1.5','0.2','0.7','2.6','../../images/Player heads/Hawks/TimHardawayJr.png','','','','../../images/logo-behind-player/hawks.svg'),
        ('Dwight Howard','Atlanta Hawks','C','12','34.9','58.4','8.9','56.6','17.5','12.7','1.5','2','1','-1.4','../../images/Player heads/Hawks/DwightHoward.png','','','','../../images/logo-behind-player/hawks.svg'),
        ('Kris Humphries','Atlanta Hawks','PF','12','17.8','46.5','29','70','6.7','5.4','0.7','0.6','0.2','-0.6','../../images/Player heads/Hawks/KrisHumphries.png','','','','../../images/logo-behind-player/hawks.svg'),
        ('Ersan Ilyasova','Atlanta Hawks','PF','8','24.4','44.4','37','76.9','11','5.9','1.2','0.4','0.7','-0.6','../../images/Player heads/Hawks/ErsanIlyasova.png','','','','../../images/logo-behind-player/hawks.svg'),
        ('Ryan Kelly','Atlanta Hawks','PF','2','19.1','37.9','31.3','79.5','6','3.1','1.3','0.5','0.3','-0.1','','','','','../../images/logo-behind-player/hawks.svg'),
        ('Paul Millsap','Atlanta Hawks','PF','10','29.5','49.3','32.9','73.5','14.2','7.5','2.3','1','1.3','1.6','../../images/Player heads/Hawks/PaulMillsap.png','','','','../../images/logo-behind-player/hawks.svg'),
        ('Mike Muscala','Atlanta Hawks','PF','3','13.1','50.2','36.7','81.4','4.7','2.8','0.8','0.5','0.4','-2','../../images/Player heads/Hawks/MikeMuscala.png','','','','../../images/logo-behind-player/hawks.svg'),
        ('Taurean Prince','Atlanta Hawks','SF','0','13.6','39.5','32.8','84.2','4.5','2.4','0.8','0.5','0.6','-0.9','../../images/Player heads/Hawks/TaureanPrince.png','','','','../../images/logo-behind-player/hawks.svg'),
        ('Dennis Schroder','Atlanta Hawks','PG','3','21.6','43.2','32.6','81.5','11.1','2.3','4.3','0.1','0.9','-1.1','../../images/Player heads/Hawks/DennisSchroder.png','','','','../../images/logo-behind-player/hawks.svg'),
        ('Thabo Sefolosha','Atlanta Hawks','SF','10','23.3','44.8','34.6','73.2','6','3.9','1.5','0.5','1.6','-1','../../images/Player heads/Hawks/ThaboSefolosha.png','','','','../../images/logo-behind-player/hawks.svg'),
        -- SIXERS
        ('Justin Anderson','Philadelphia 76ers','SG','1','13.4','41.7','28.3','80','5.3','2.8','0.6','0.4','0.5','-3','../../images/Player heads/76ers/JustinAnderson.png','','','','../../images/logo-behind-player/sixers.svg'),
        ('Jerryd Bayless','Philadelphia 76ers','PG','8','21.3','41.4','36.6','82.5','8.6','2.1','2.9','0.1','0','-7','../../images/Player heads/76ers/JerrydBayless.png','','','','../../images/logo-behind-player/sixers.svg'),
        ('Robert Covington','Philadelphia 76ers','SF','3','28.4','39.3','35.6','81.1','12.7','5.5','1.4','0.6','1.9','-2','../../images/Player heads/76ers/RobertCovington.png','','','','../../images/logo-behind-player/sixers.svg'),
        ('Joel Embiid','Philadelphia 76ers','C','0','25.4','46.6','36.7','78.3','20.2','7.8','2.1','2.4','0.9','2.2','../../images/Player heads/76ers/JoelEmbiid.png','','','','../../images/logo-behind-player/sixers.svg'),
        ('Gerald Henderson','Philadelphia 76ers','SG','7','26','44.1','32.7','79.4','11.3','3.2','1.9','0.3','0.5','-4','../../images/Player heads/76ers/GeraldHenderson.png','','','','../../images/logo-behind-player/sixers.svg'),
        ('Richaun Holmes','Philadelphia 76ers','PF','1','16.1','54.5','27.8','67.1','7.1','3.7','0.8','0.9','0.7','-2.4','../../images/Player heads/76ers/RichaunHolmes.png','','','','../../images/logo-behind-player/sixers.svg'),
        ('Shawn Long','Philadelphia 76ers','PF','0','9','61.5','33.3','56.5','5.8','3.4','0.6','0.8','0.3','-0.1','','','','','../../images/logo-behind-player/sixers.svg'),
        ('Timothe Luwawu-Cabarrot','Philadelphia 76ers','SG','0','14.5','38.6','31.1','82.8','4.8','1.8','0.9','0.1','0.3','-0.5','../../images/Player heads/76ers/TimotheLuwawuCabarrot.png','','','','../../images/logo-behind-player/sixers.svg'),
        ('T.J. McConnell','Philadelphia 76ers','PG','1','22.5','46.8','30.3','72.7','6.3','3.1','5.4','0.1','1.6','-3.1','../../images/Player heads/76ers/TJMcConnell.png','','','','../../images/logo-behind-player/sixers.svg'),
        ('Jahlil Okafor','Philadelphia 76ers','C','1','26.4','51','16.7','67.9','14.7','6','1.2','1.1','0.4','-6.4','../../images/Player heads/76ers/JahlilOkafor.png','','','','../../images/logo-behind-player/sixers.svg'),
        ('Sergio Rodriguez','Philadelphia 76ers','PG','4','14.9','40.7','33.3','73.9','4.9','1.5','3.3','0','0.7','-2.3','../../images/Player heads/76ers/SergioRodriguez.png','','','','../../images/logo-behind-player/sixers.svg'),
        ('Dario Saric','Philadelphia 76ers','PF','0','26.1','41.3','32.4','78.7','12.6','6.3','2.2','0.4','0.7','-3.6','../../images/Player heads/76ers/DarioSaric.png','','','','../../images/logo-behind-player/sixers.svg'),
        ('Ben Simmons','Philadelphia 76ers','SF','0','0','0','0','0','0','0','0','0','0','0','../../images/Player heads/76ers/BenSimmons.png','','','','../../images/logo-behind-player/sixers.svg'),
        ('Tiago Splitter','Philadelphia 76ers','C','6','19.4','55.7','0','69.6','8','5.1','1.2','0.6','0.6','0','../../images/Player heads/76ers/TiagoSplitter.png','','','','../../images/logo-behind-player/sixers.svg'),
        ('Nik Stauskas','Philadelphia 76ers','SG','2','22.4','38.9','34.5','80.5','7.4','2.2','1.6','0.3','0.6','-2.2','../../images/Player heads/76ers/NikStauskas.png','','','','../../images/logo-behind-player/sixers.svg'),
          -- BUCKS
        ('Giannis Antetokounmpo','Milwaukee Bucks','SF','3','31.6','49.7','28','74.2','14.7','6.8','3.5','1.3','1.7','1.1','../../images/Player heads/Bucks/GiannisAntetokounmpo.png','','','','../../images/logo-behind-player/bucks.svg'),
        ('Michael Beasley','Milwaukee Bucks','SF','8','23.6','45.8','34.7','75.7','12.7','4.7','1.3','0.5','0.5','0','../../images/Player heads/Bucks/MichaelBeasley.png','','','','../../images/logo-behind-player/bucks.svg'),
        ('Malcolm Brogdon','Milwaukee Bucks','SG','0','26.2','45.1','40.6','85.7','10','2.8','4.1','0.1','1.1','1.2','../../images/Player heads/Bucks/MalcolmBrogdon.png','','','','../../images/logo-behind-player/bucks.svg'),
        ('Matthew Dellavedova','Milwaukee Bucks','PG','3','22.3','39.2','39','82.7','6.2','1.9','3.7','0.1','0.8','-1.6','../../images/Player heads/Bucks/MatthewDellavedova.png','','','','../../images/logo-behind-player/bucks.svg'),
        ('Spencer Hawes','Milwaukee Bucks','PF','9','22.9','45.7','35','71.5','8.7','5.7','1.9','1','0.3','-3','../../images/Player heads/Bucks/SpencerHawes.png','','','','../../images/logo-behind-player/bucks.svg'),
        ('John Henson','Milwaukee Bucks','C','4','19.1','53.3','0','57.2','7.7','5.2','1','1.5','0.5','-0.9','../../images/Player heads/Bucks/JohnHenson.png','','','','../../images/logo-behind-player/bucks.svg'),
        ('Terrence Jones','Milwaukee Bucks','PF','4','24.1','50.1','29.9','62.2','10.5','5.7','1','1.2','0.8','-1.1','','','','','../../images/logo-behind-player/bucks.svg'),
        ('Thon Maker','Milwaukee Bucks','PF','0','8.2','42.3','38.3','67.6','3.4','1.7','0.3','0.4','0.2','-1.4','../../images/Player heads/Bucks/ThonMaker.png','','','','../../images/logo-behind-player/bucks.svg'),
        ('Khris Middleton','Milwaukee Bucks','SG','4','30.5','45.2','40.5','87.3','13.8','3.8','2.7','0.2','1.3','2.6','../../images/Player heads/Bucks/KhrisMiddleton.png','','','','../../images/logo-behind-player/bucks.svg'),
        ('Greg Monroe','Milwaukee Bucks','C','6','29.8','51.1','0','70.5','14.1','8.8','2.3','0.6','1.2','2.6','../../images/Player heads/Bucks/GregMonroe.png','','','','../../images/logo-behind-player/bucks.svg'),
        ('Jabari Parker','Milwaukee Bucks','PF','2','32.1','49.1','34.1','74.8','15.8','5.6','2.1','0.4','1','-1.7','../../images/Player heads/Bucks/JabariParker.png','','','','../../images/logo-behind-player/bucks.svg'),
        ('Tony Snell','Milwaukee Bucks','SG','3','21.1','41.4','37','80.9','6','2.6','1','0.2','0.6','-1.4','../../images/Player heads/Bucks/TonySnell.png','','','','../../images/logo-behind-player/bucks.svg'),
        ('Mirza Teletovic','Milwaukee Bucks','PF','4','17.9','40.6','36.9','75.4','8.2','3.3','0.8','0.3','0.2','2','../../images/Player heads/Bucks/MirzaTeletovic.png','','','','../../images/logo-behind-player/bucks.svg'),
        ('Jason Terry','Milwaukee Bucks','SG','17','30.4','44.4','37.9','84.5','13.8','2.4','4','0.2','0.7','2','../../images/Player heads/Bucks/JasonTerry.png','','','','../../images/logo-behind-player/bucks.svg'),
        ('Rashad Vaughn','Milwaukee Bucks','SG','1','13.2','32.3','30.2','76.5','3.2','1.3','0.5','0.2','0.4','-1','../../images/Player heads/Bucks/RashadVaughn.png','','','','../../images/logo-behind-player/bucks.svg'),
          -- BULLS
        ('Jimmy Butler','Chicago Bulls','SF','5','32.1','44.5','33.1','82.8','15.3','4.8','3','0.5','1.9','1.8','../../images/Player heads/Bulls/JimmyButler.png','','','','../../images/logo-behind-player/bulls.svg'),
        ('Isaiah Canaan','Chicago Bulls','PG','3','20.5','36.8','35.2','82.7','8.5','1.8','1.6','0.1','0.6','-2.6','../../images/Player heads/Bulls/IsaiahCanaan.png','','','','../../images/logo-behind-player/bulls.svg'),
        ('Michael Carter-Williams','Chicago Bulls','PG','3','30.8','41','25.2','69.4','13.4','5.3','5.6','0.6','0.8','-1','../../images/Player heads/Bulls/MichelCarterWilliams.png','','','','../../images/logo-behind-player/bulls.svg'),
        ('Cristiano Felicio','Chicago Bulls','PF','1','14.1','57','0','66.9','4.4','4.3','0.7','0.3','0.4','-1','../../images/Player heads/Bulls/CristianoFelicio.png','','','','../../images/logo-behind-player/bulls.svg'),
        ('Jerian Grant','Chicago Bulls','PG','1','16.4','40.1','29.6','81.7','5.6','1.8','2.1','0.1','0.7','-0.1','../../images/Player heads/Bulls/JerianGrant.png','','','','../../images/logo-behind-player/bulls.svg'),
        ('Joffrey Lauvergne','Chicago Bulls','C','2','15.2','47.2','29.1','73.9','6.2','4.1','0.9','0.2','0.4','-1.2','../../images/Player heads/Bulls/JoffreyLauvergne.png','','','','../../images/logo-behind-player/bulls.svg'),
        ('Robin Lopez','Chicago Bulls','C','8','22.8','52.7','0','76.1','8.7','5.5','0.7','1.3','0.2','-0.3','../../images/Player heads/Bulls/RobinLopez.png','','','','../../images/logo-behind-player/bulls.svg'),
        ('Nikola Mirotic','Chicago Bulls','PF','2','22.6','40.4','34.1','79.6','10.6','5.2','1.2','0.7','0.7','2.1','../../images/Player heads/Bulls/NikolaMirotic.png','','','','../../images/logo-behind-player/bulls.svg'),
        ('Anthony Morrow','Chicago Bulls','SG','8','21.9','44.7','41.7','87.8','9.5','2.2','0.9','0.1','0.5','-1','../../images/Player heads/Bulls/AnthonyMorrow.png','','','','../../images/logo-behind-player/bulls.svg'),
        ('Cameron Payne','Chicago Bulls','PG','1','13.4','37.9','32.1','75','5.2','1.5','1.9','0.1','0.5','-2.1','../../images/Player heads/Bulls/CameronPayne.png','','','','../../images/logo-behind-player/bulls.svg'),
        ('Bobby Portis','Chicago Bulls','PF','1','16.4','44.4','30.6','70.2','6.6','4.9','0.7','0.3','0.2','-2.1','../../images/Player heads/Bulls/BobbyPortis.png','','','','../../images/logo-behind-player/bulls.svg'),
        ('Rajon Rondo','Chicago Bulls','PG','10','32.3','46.3','30.1','60.7','10.6','4.9','8.5','0.1','1.4','-1.1','../../images/Player heads/Bulls/RajonRondo.png','','','','../../images/logo-behind-player/bulls.svg'),
        ('Denzel Valentine','Chicago Bulls','SG','0','16.3','35.7','34.3','78.6','4.9','2.6','1.1','0.1','0.6','-1.1','../../images/Player heads/Bulls/DenzelValentine.png','','','','../../images/logo-behind-player/bulls.svg'),
        ('Dwayne Wade','Chicago Bulls','SG','13','35.4','48.5','28.7','76.8','23.3','4.8','5.7','0.9','1.5','-1.7','../../images/Player heads/Bulls/DwyaneWade.png','','','','../../images/logo-behind-player/bulls.svg'),
        ('Paul Zipser','Chicago Bulls','SF','0','17.7','40.4','32.4','75','5.1','2.7','0.7','0.4','0.4','-0.7','../../images/Player heads/Bulls/PaulZipser.png','','','','../../images/logo-behind-player/bulls.svg'),
          -- CAVS
        ('Kay Felder','Cleveland Cavaliers','PG','0','9.7','38.9','31.8','72.3','4.1','1','1.3','0.2','0.4','-1.5','../../images/Player heads/Cavaliers/KayFelder.png','','','','../../images/logo-behind-player/cavs.svg'),
        ('Channing Frye','Cleveland Cavaliers','PF','11','23.5','43.9','38.9','82','9.2','4.8','1','0.6','0.4','0.7','../../images/Player heads/Cavaliers/ChanningFrye.png','','','','../../images/logo-behind-player/cavs.svg'),
        ('Kyrie Irving','Cleveland Cavaliers','PG','6','34.2','45.7','38.2','87.2','21.6','3.4','5.5','0.3','1.1','5.2','../../images/Player heads/Cavaliers/KyrieIrving.png','','','','../../images/logo-behind-player/cavs.svg'),
        ('Lebron James','Cleveland Cavaliers','SF','14','38.9','50','34.3','74','27.1','7.2','7','0.8','1.3','6.9','../../images/Player heads/Cavaliers/LeBronJames.png','','','','../../images/logo-behind-player/cavs.svg'),
        ('Richard Jefferson','Cleveland Cavaliers','SF','16','29.5','46.4','37.7','76.8','12.9','4.1','2.1','0.3','0.3','2.4','../../images/Player heads/Cavaliers/RichardJefferson.png','','','','../../images/logo-behind-player/cavs.svg'),
        ('James Jones','Cleveland Cavaliers','SG','14','15.7','40.2','40.3','84.1','5.3','1.8','0.5','0.3','0.1','-2','../../images/Player heads/Cavaliers/JamesJones.png','','','','../../images/logo-behind-player/cavs.svg'),
        ('Kyle Korver','Cleveland Cavaliers','SG','13','26.5','44.3','43','88','10','3.1','1.8','0.3','0.6','-2.8','../../images/Player heads/Cavaliers/KyleKorver.png','','','','../../images/logo-behind-player/cavs.svg'),
        ('DeAndre Liggins','Cleveland Cavaliers','SG','4','10.1','41.6','35.8','56.9','2.1','1.4','0.7','0.2','0.8','0.7','../../images/Player heads/Cavaliers/DeAndreLiggins.png','','','','../../images/logo-behind-player/cavs.svg'),
        ('Kevin Love','Cleveland Cavaliers','PF','9','32.6','44.3','36.5','82','18.4','11.5','2.4','0.5','0.9','6.7','../../images/Player heads/Cavaliers/KevinLove.png','','','','../../images/logo-behind-player/cavs.svg'),
        ('Larry Sanders','Cleveland Cavaliers','PF','4','19.8','48','0','55','6.5','5.7','0.7','1.8','0','-6','','','','','../../images/logo-behind-player/cavs.svg'),
        ('Iman Shumpert','Cleveland Cavaliers','SG','6','25.6','39.7','34.3','76.2','7.5','3.5','1.9','0.2','0.8','0.9','../../images/Player heads/Cavaliers/ImanShumpert.png','','','','../../images/logo-behind-player/cavs.svg'),
        ('JR Smith','Cleveland Cavaliers','SG','11','26.9','42.1','37.3','73.3','13','3.2','2.2','0.2','1.1','2.6','../../images/Player heads/Cavaliers/JRSmith.png','','','','../../images/logo-behind-player/cavs.svg'),
        ('Tristan Thompson','Cleveland Cavaliers','C','6','28.7','51.2','0','61.2','9.4','8.7','0.8','0.8','0.5','2.2','../../images/Player heads/Cavaliers/TristanThompson.png','','','','../../images/logo-behind-player/cavs.svg'),
        ('Deron Williams','Cleveland Cavaliers','PG','11','34.4','44.5','35.7','82.2','16.5','3.1','8.1','0.2','0.5','-1.2','../../images/Player heads/Cavaliers/DeronWilliams.png','','','','../../images/logo-behind-player/cavs.svg'),
        ('Derrick Williams','Cleveland Cavaliers','PF','5','21','43.4','29.9','71','9.1','4','0.7','0.3','0.3','-1','../../images/Player heads/Cavaliers/DerrickWilliams.png','','','','../../images/logo-behind-player/cavs.svg'),
        -- KNICKS
        ('Carmelo Anthony','New York Knicks','SF','13','36.2','45.2','34.6','81.3','24.8','6.6','3.1','0.5','0.8','-3.2','../../images/Player heads/Knicks/CarmeloAnthony.png','','','','../../images/logo-behind-player/knicks.svg'),
        ('Ron Baker','New York Knicks','SG','0','13.3','37.2','31.1','64.7','3.5','1.6','1.5','0.1','0.6','-0.6','../../images/Player heads/Knicks/RonBaker.png','','','','../../images/logo-behind-player/knicks.svg'),
        ('Willy Hernangomez','New York Knicks','C','0','17.4','54','23.1','69.6','7.5','6.8','1.2','0.6','0.6','-0.6','../../images/Player heads/Knicks/WillyHernangomez.png','','','','../../images/logo-behind-player/knicks.svg'),
        ('Justin Holiday','New York Knicks','SG','3','15.4','40.2','34.3','79.8','5.5','1.9','1','0.3','0.8','-0.5','../../images/Player heads/Knicks/JustinHoliday.png','','','','../../images/logo-behind-player/knicks.svg'),
        ('Mindaugas Kuzminskas','New York Knicks','SF','0','14.4','42.1','32.6','82.8','5.9','1.9','1','0.2','0.5','-0.1','../../images/Player heads/Knicks/MindaugasKuzminskas.png','','','','../../images/logo-behind-player/knicks.svg'),
        ('Courtney Lee','New York Knicks','SG','8','27.8','45.1','38.6','84.7','9.7','2.7','1.6','0.3','1','-3.1','../../images/Player heads/Knicks/CourtneyLee.png','','','','../../images/logo-behind-player/knicks.svg'),
        ('Maurice Ndour','New York Knicks','SF','0','7.2','45.2','20','83.3','2.1','1.3','0.1','0.1','0.4','0.4','../../images/Player heads/Knicks/MauriceNdour.png','','','','../../images/logo-behind-player/knicks.svg'),
        ('Joakim Noah','New York Knicks','C','9','28.9','49','0','69.9','9','9.4','2.9','1.4','0.7','-3.1','../../images/Player heads/Knicks/JoakimNoah.png','','','','../../images/logo-behind-player/knicks.svg'),
        ('Kyle O"Quinn','New York Knicks','C','4','14.4','50.4','21.7','72.7','5.5','4.5','1.2','0.9','0.5','-1.4','../../images/Player heads/Knicks/KyleOQuinn.png','','','','../../images/logo-behind-player/knicks.svg'),
        ('Marshall Plumlee','New York Knicks','C','0','7.1','45.5','0','41.7','1.1','1.8','0.6','0.2','0.1','-0.2','../../images/Player heads/Knicks/MarshallPlumlee.png','','','','../../images/logo-behind-player/knicks.svg'),
        ('Kristaps Porzingis','New York Knicks','PF','1','30.4','43.2','34.7','81.4','16','7.3','1.4','1.9','0.7','-1.5','../../images/Player heads/Knicks/KristapsPorzingis.png','','','','../../images/logo-behind-player/knicks.svg'),
        ('Chasson Randle','New York Knicks','PG','0','10','42.4','40','96.2','4.8','1','1.4','0.1','0.2','0.7','../../images/Player heads/Knicks/ChassonRandle.png','','','','../../images/logo-behind-player/knicks.svg'),
        ('Derrick Rose','New York Knicks','PG','7','34.7','45.1','29.8','82','19.5','3.7','6','0.4','0.7','-2.8','../../images/Player heads/Knicks/DerrickRose.png','','','','../../images/logo-behind-player/knicks.svg'),
        ('Lance Thomas','New York Knicks','SF','5','18.6','42.8','41','79.7','5.6','2.6','0.7','0.1','0.5','-4.4','../../images/Player heads/Knicks/LanceThomas.png','','','','../../images/logo-behind-player/knicks.svg'),
        ('Sasha Vujacic','New York Knicks','SG','9','15.3','39.3','36.9','86.4','5.3','1.9','1.3','0.1','0.3','0.4','../../images/Player heads/Knicks/SashaVujacic.png','','','','../../images/logo-behind-player/knicks.svg');