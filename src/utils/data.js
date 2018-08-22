const lordsVaegir =
['Belgaru', 'Bracha', 'Crahask', 'Doru', 'Druli', 'Gastya', 'Harish', 'Khavel',
'Kumipa', 'Marmun', 'Meriga', 'Mleza', 'Naldera', 'Nelag', 'Ralcha', 'Rudin',
'Taisa', 'Valishin', 'Vlan', 'Vuldrat'];

const lordsKhergit =
['Akadan', 'Alagur', 'Asugan', 'Belir', 'Brula', 'Chaurka', 'Dundush', 'Hugu',
'Imirza', 'Karaban', 'Kramuk', 'Nasugei', 'Sebula', 'Tansugai', 'Tirida',
'Tonju', 'Tulug', 'Ulusamai', 'Urubay', 'Urumuda'];

const lordsNord =
['Aedin', 'Aeric', 'Bulba', 'Dirigun', 'Faarn', 'Gearth', 'Gerlad', 'Gundur',
'Haeda', 'Harald', 'Irya', 'Knudarr', 'Logarson', 'Marayirr', 'Olaf', 'Rayeck',
'Reamald', 'Surdun', 'Turegor', 'Turya'];

const lordsRhodok =
['Etrosq', 'Falsevor', 'Fraichin', 'Fudreim', 'Gerluchs', 'Gharmall', 'Gutlans',
'Kurnias', 'Laruqen', 'Matheas', 'Nealcha', 'Raichs', 'Reichsin', 'Reland',
'Rimusk', 'Talbar', 'Tarchias', 'Tellrog', 'Tribidan', 'Trimbau'];

const lordsSarranid =
[ 'Amdar', 'Atis', 'Ayyam', 'Azadun', 'Biliya', 'Dhashwal', 'Dhiyul', 'Ghanawa',
'Ghulassen', 'Hamezan', 'Hiwan', 'Lakhem', 'Muhnir', 'Mundhalir', 'Nuam',
'Nuwas', 'Quryas', 'Raddoun', 'Tilimsan', 'Uqais'];

const lordsSwadia =
['Beranz', 'Clais', 'Deglan', 'Delinard', 'Devlian', 'Despin', 'Grainwad',
'Haringoth', 'Klargus', 'Meltor', 'Mirchaud', 'Montewar', 'Plais', 'Rafarch',
'Rafard', 'Regas', 'Rochabarth', 'Ryis', 'Stamar', 'Tredian'];

const lords = [].concat(
    lordsVaegir,
    lordsKhergit,
    lordsNord,
    lordsRhodok,
    lordsSarranid,
    lordsSwadia
).sort();

const fakeLords = ['Doggo', 'Neko'];
module.exports = {
    lords,
    fakeLords
};
