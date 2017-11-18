
DROP DATABASE IF EXISTS bfeng;

create database bfeng charset=utf8;
USE bfeng;

CREATE TABLE b_carousel(
cid INT PRIMARY KEY AUTO_INCREMENT,
curl VARCHAR(30),
chref VARCHAR(30)
);
INSERT INTO b_carousel VALUES
(NULL,'1.jpeg','#'),
(NULL,'2.jpeg','#'),
(NULL,'3.jpeg','#');


CREATE TABLE b_carousel_bottom(
cbid INT PRIMARY KEY AUTO_INCREMENT,
cburl VARCHAR(30),
chref VARCHAR(30),
cspan VARCHAR(10)
);
INSERT INTO b_carousel_bottom VALUES
(NULL,'a.png','#','风迷福利'),
(NULL,'b.jpeg','#','暴风TV'),
(NULL,'c.jpeg','#','Matrix评测'),
(NULL,'d.jpeg','#','线下体验');


CREATE TABLE b_product(
pbid INT PRIMARY KEY AUTO_INCREMENT,
pburl VARCHAR(30),
phref VARCHAR(30),
pname VARCHAR(20),
price VARCHAR(10)
);
INSERT INTO b_product VALUES 
(NULL,'1.jpeg','#','暴风魔镜Matrix一体机','￥2499'),
(NULL,'2.jpeg','#','暴风魔镜小暴风魔镜S1','￥199'),
(NULL,'3.jpeg','#','暴风魔镜小M','￥79'),
(NULL,'4.jpeg','#','暴风魔镜小Q','￥1199'),
(NULL,'5.jpeg','#','暴风魔镜小D','￥59'),
(NULL,'6.jpeg','#','暴风魔镜小4 苹果版','￥179');

CREATE TABLE b_content(
conid INT PRIMARY KEY AUTO_INCREMENT,
conhref VARCHAR(10),
conp VARCHAR(20),
conspan VARCHAR(30),
consrc VARCHAR(30),
conpl VARCHAR(10)
);
INSERT INTO b_content VALUES
(NULL,'#','','','1.jpeg',''),
(NULL,'#','海量内容 震撼体验','35000+影院资源','2.jpeg','在线电影'),
(NULL,'#','新角度 新风景','身临其境 漫游异域空间','3.jpeg','360度全局'),
(NULL,'#','虚拟现实有平台','掉进沉浸式游戏世界','4.jpeg','VR游戏'),
(NULL,'#','VR社交平台','VR社交 改变未来','5.jpeg','极乐王国');


CREATE TABLE b_login(
bid INT PRIMARY KEY AUTO_INCREMENT,
btel BIGINT,
bpwd VARCHAR(32)
);

INSERT INTO b_login VALUES
(NULL,13901010101,'a23456'),
(NULL,13900000000,'b23456'),
(NULL,13901010101,'c23456');

























