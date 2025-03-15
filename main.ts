let sloupy_kolize : string[] = []
let VyskaMezery = 0
let čas = 0
let stavA = 0
let hrac = ["{B10000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}", "{B01000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}", "{B00100000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}", "{B00010000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}", "{B00001000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}", "{B00000100, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}", "{B00000010, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}", "{B00000001, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}"]
let sloup = ["{B00011111, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}", "{B10001111, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}", "{B11000111, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}", "{B11100011, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}", "{B11110001, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}", "{111111000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}"]
let sloup_kolize_seznam = ["00011111", "10001111", "11000111", "11100011", "11110001", "11111000"]
let zaSloupcuSloup = randint(4, 6)
max7219_matrix.setup(4, DigitalPin.P16, DigitalPin.P15, DigitalPin.P14, DigitalPin.P13)
max7219_matrix.for_4_in_1_modules(rotation_direction.clockwise, false)
let vyska_postava = 7
max7219_matrix.displayCustomCharacter(max7219_matrix.getCustomCharacterArray(hrac[vyska_postava]), 0, true)
let runs = 1
while (runs == 1) {
    stavA = 0
    čas = input.runningTime()
    while (true) {
        if (500 < input.runningTime() - čas) {
            break
        } else if (input.buttonIsPressed(Button.A)) {
            stavA = 1
        }
        
    }
    if (stavA == 1) {
        vyska_postava += 2
        if (vyska_postava > 7) {
            vyska_postava = 7
        }
        
    }
    
    vyska_postava += -1
    if (vyska_postava < 0) {
        vyska_postava = 0
    }
    
    max7219_matrix.displayCustomCharacter(max7219_matrix.getCustomCharacterArray(hrac[vyska_postava]), 0, true)
    max7219_matrix.displayCustomCharacter(max7219_matrix.getCustomCharacterArray(sloup[VyskaMezery]), zaSloupcuSloup, false)
    zaSloupcuSloup += -1
    if (zaSloupcuSloup < 0) {
        zaSloupcuSloup = randint(4, 6)
        VyskaMezery = randint(0, 5)
        max7219_matrix.displayCustomCharacter(max7219_matrix.getCustomCharacterArray(sloup[VyskaMezery]), zaSloupcuSloup, false)
    }
    
    sloupy_kolize = [convertToText(sloup_kolize_seznam[VyskaMezery]).substr(0, 1), convertToText(sloup_kolize_seznam[VyskaMezery]).substr(1, 1), convertToText(sloup_kolize_seznam[VyskaMezery]).substr(2, 1), convertToText(sloup_kolize_seznam[VyskaMezery]).substr(3, 1), convertToText(sloup_kolize_seznam[VyskaMezery]).substr(4, 1), convertToText(sloup_kolize_seznam[VyskaMezery]).substr(5, 1), convertToText(sloup_kolize_seznam[VyskaMezery]).substr(6, 0), convertToText(sloup_kolize_seznam[VyskaMezery]).substr(7, 0)]
    if (zaSloupcuSloup == 0 && parseFloat(sloupy_kolize[vyska_postava]) == 1) {
        max7219_matrix.scrollText("You Died!", 75, 500)
        runs = 0
    }
    
}
