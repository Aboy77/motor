const cars = [{
        brand: 'Jeep',
        model: 'Wrangler Rubicon ',
        id: 1,
        year: 2018,
        price: 35998,
        doors: 4,
        color: 'Blanco',
        transmitions: 'automatico',
        information: "4WD/AWD, ABS Brakers, Air Conditioning, Allow Wheels",
        image: "img/car3.jpg"
    },
    {
        brand: 'Maserati',
        model: 'MC20',
        id: 1,
        year: 2020,
        price: 40000,
        doors: 4,
        color: 'Negro',
        transmitions: 'automatico',
        information: "3.0L V6 621HP, 0-62 mph in less 2.9 sec., Top speed: 202 mph, up to 25 MPH, MC20 DCT 8-Speed Gearbox",
        image: "img/car4.jpg"
    },
    {
        brand: 'Ford',
        model: 'Mustang',
        id: 1,
        year: 2015,
        price: 20000,
        doors: 2,
        color: 'Blanco',
        transmitions: 'automatico',
        information: "ABS Brakers, Air Conditioning, Alloy Wheels, AM/FM Stereo, Auxiliary Audio Input, Bluetooth",
        image: "img/car7.jpg"
    },
    {
        brand: 'Audi',
        model: 'A6',
        id: 1,
        year: 2020,
        price: 35000,
        doors: 4,
        color: 'Negro',
        transmitions: 'automatico',
        information: "City/Highway/ Gas Mileage : 24/34 mpg, Exterior/interior Color : Black/Black, Transmission : Automatic, Drive : 2WD",
        image: "img/car1.jpg"
    },
    {
        brand: 'BMW',
        model: 'Serie 5',
        id: 1,
        year: 2016,
        price: 15000,
        doors: 4,
        color: 'Rojo',
        transmitions: 'automatico',
        information: "City/Highway/ Gas Mileage : 24/34 mpg, Exterior/interior Color : Black/Black, Transmission : Automatic, Drive : 2WD",
        image: "img/car9.jpg"
    },
    {
        brand: 'Mercedes Benz',
        model: 'Clase C',
        id: 1,
        year: 2015,
        price: 25000,
        doors: 4,
        color: 'Blanco',
        transmitions: 'automatico',
        information: "With all C300 and C300 4Matic models, a turbocharged 2.0-liter four-cylinder engine is standard, and it generates 255 horsepower and 273 lb-ft of torque",
        image: "img/car8.jpg"
    },
    {
        brand: 'Chevrolet',
        model: 'Corvette',
        id: 1,
        year: 2019,
        price: 90000,
        doors: 2,
        color: 'Rojo',
        transmitions: 'manual',
        information: "City/Highway/ Gas Mileage : 12/25 mpg, Exterior/interior Color : Silver/Black, Transmission : Manual 7 Speed, Drive : 2WD",
        image: "img/car5.jpg"
    },
    {
        brand: 'Ford',
        model: 'Mustang',
        id: 1,
        year: 2019,
        price: 80000,
        doors: 2,
        color: 'Rojo',
        transmitions: 'manual',
        information: "3.0L V6 621HP, 0-62 mph in less 2.9 sec., Top speed: 202 mph, up to 25 MPH, MC20 DCT 8-Speed Gearbox",
        image: "img/car7.jpg"
    },
    {
        brand: 'Dodge',
        model: 'Challenger',
        id: 1,
        year: 2020,
        price: 19998,
        doors: 4,
        color: 'Blanco',
        transmitions: 'automatico',
        information: "City/Highway/ Gas Mileage : 19/30 mpg, Exterior/interior Color : Silver/Black, Transmission : Automatic, Drive : 2WD",
        image: "img/car16.jpg"
    },
    {
        brand: 'Audi',
        model: 'A3',
        id: 1,
        year: 2017,
        price: 55000,
        doors: 2,
        color: 'Negro',
        transmitions: 'manual',
        information: "City/Highway/ Gas Mileage : 24/33 mpg, Exterior/interior Color : Gray/Black, Transmission : Automatic, Drive : 4WD",
        image: "img/car12.jpg"
    },
    {
        brand: 'Dodge',
        model: 'Challenger',
        id: 1,
        year: 2020,
        price: 25000,
        doors: 2,
        color: 'Rojo',
        transmitions: 'manual',
        information: "City/Highway/ Gas Mileage : 19/30 mpg, Exterior/interior Color : Silver/Black, Transmission : Automatic, Drive : 2WD",
        image: "img/car16.jpg"
    },
    {
        brand: 'Mercedes Benz',
        model: 'Clase C',
        id: 1,
        year: 2018,
        price: 45000,
        doors: 4,
        color: 'Azul',
        transmitions: 'automatico',
        information: "With all C300 and C300 4Matic models, a turbocharged 2.0-liter four-cylinder engine is standard, and it generates 255 horsepower and 273 lb-ft of torque",
        image: "img/car8.jpg"
    },
    {
        brand: 'BMW',
        model: 'Serie 5',
        id: 1,
        year: 2019,
        price: 15000,
        doors: 4,
        color: 'Blanco',
        transmitions: 'automatico',
        information: "City/Highway/ Gas Mileage : 24/34 mpg, Exterior/interior Color : Black/Black, Transmission : Automatic, Drive : 2WD",
        image: "img/car14.jpg"
    },
    {
        brand: 'Ford',
        model: 'Mustang',
        id: 1,
        year: 2017,
        price: 20000,
        doors: 2,
        color: 'Negro',
        transmitions: 'manual',
        information: "3.0L V6 621HP, 0-62 mph in less 2.9 sec., Top speed: 202 mph, up to 25 MPH, MC20 DCT 8-Speed Gearbox",
        image: "img/car7.jpg"
    },
    {
        brand: 'Dodge',
        model: 'Challenger',
        id: 1,
        year: 2015,
        price: 15000,
        doors: 2,
        color: 'Azul',
        transmitions: 'automatico',
        information: "City/Highway/ Gas Mileage : 19/30 mpg, Exterior/interior Color : Brown/Brown, Transmission : Automatic, Drive : 2WD",
        image: "img/car16.jpg"
    },
    {
        brand: 'BMW',
        model: 'Serie 3',
        id: 1,
        year: 2018,
        price: 10000,
        doors: 4,
        color: 'Blanco',
        transmitions: 'automatico',
        information: "City/Highway/ Gas Mileage : 24/34 mpg, Exterior/interior Color : Gray/Black, Transmission : Manual 5 speed, Drive : 2WD",
        image: "img/car10.jpg"
    },
    {
        brand: 'BMW',
        model: 'Serie 5',
        id: 1,
        year: 2017,
        price: 13000,
        doors: 4,
        color: 'Negro',
        transmitions: 'automatico',
        information: "City/Highway/ Gas Mileage : 24/34 mpg, Exterior/interior Color : Black/Black, Transmission : Manual 5 speed, Drive : 2WD",
        image: "img/car14.jpg"
    },
    {
        brand: 'Mercedes Benz',
        model: 'Clase C',
        id: 1,
        year: 2018,
        price: 20000,
        doors: 4,
        color: 'Blanco',
        transmitions: 'automatico',
        information: "With all C300 and C300 4Matic models, a turbocharged 2.0-liter four-cylinder engine is standard, and it generates 200 horsepower and 223 lb-ft of torque",
        image: "img/car8.jpg"
    },
    {
        brand: 'Audi',
        model: 'A4',
        id: 1,
        year: 2016,
        price: 30000,
        doors: 4,
        color: 'Azul',
        transmitions: 'automatico',
        information: "City/Highway/ Gas Mileage : 24/31 mpg, Exterior/interior Color : Black/Brown, Transmission : Manual 5 speed, Drive : 4WD",
        image: "img/car13.jpg"
    },
    {
        brand: 'Audi',
        model: 'A4',
        id: 2,
        year: 2016,
        price: 20000,
        doors: 4,
        color: 'Azul',
        transmitions: 'automatico',
        information: "City/Highway/ Gas Mileage : 24/31 mpg, Exterior/interior Color : Black/Brown, Transmission : Manual 5 speed, Drive : 4WD",
        image: "img/car13.jpg"
    },
    {
        brand: 'Dodge',
        model: 'Challenger',
        id: 2,
        year: 2015,
        price: 9000,
        doors: 2,
        color: 'Azul',
        transmitions: 'automatico',
        information: "City/Highway/ Gas Mileage : 19/30 mpg, Exterior/interior Color : Brown/Brown, Transmission : Automatic, Drive : 2WD",
        image: "img/car16.jpg"
    }
];