constphone = {
    brnad: 'huawei',
    SO: 'android 10',
    ram: '4GB',
    add: 'ADD',
    screen: '260gb',
    model: 'Y', 
    funtional: true,
    damage: false,
};

console.log(phone);
console.log(phone, brand);
phone.damage = true;
phone.color = 'black';
phone['case color'] = 'grey';
console.log(phone);
console.log(phone('color'));