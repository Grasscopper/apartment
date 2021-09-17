import { Component } from '@angular/core'

@Component({
  selector: "app-apartment",
  templateUrl: "./apartment.component.html",
  styleUrls: ["./apartment.component.css"]
})

export class ApartmentComponent {
  randomPersonaTime = 0
  personaSource = ""

  getRandomPersona() {
    this.randomPersonaTime = Math.floor(Math.random() * (8573))
    this.personaSource = `https://www.youtube.com/embed/C5V2NB5gZmo?start=${this.randomPersonaTime}&autoplay=1`
  }

  randomNeotokyoTime = 0
  neotokyoSource = ""

  getRandomRecon() {
    this.randomNeotokyoTime = Math.floor(Math.random() * (8327))
    this.neotokyoSource = `https://www.youtube.com/embed/0gi5-mEVEc4?start=${this.randomNeotokyoTime}&autoplay=1`
  }

  randomAnimalTime = 0
  animalSource = ""

  getRandomVillager() {
    this.randomAnimalTime = Math.floor(Math.random() * (18973))
    this.animalSource = `https://www.youtube.com/embed/gjyQoz6f0qw?start=${this.randomAnimalTime}&autoplay=1`
  }

  ngOnInit() {
    this.getRandomPersona()
    this.getRandomRecon()
    this.getRandomVillager()
  }

  listening = false
  radioCreator = "https://grasscopper.github.io/apartment/"
  radioStation = "Radio Off"

  lofiColor = "primary"
  animalColor = "primary"
  gamingColor = "primary"
  indieColor = "primary"
  neotokyoColor = "primary"
  personaColor = "primary"
  jazzColor = "primary"

  lofi(radio) {
    radio.src = "https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1"
    radio.style.visibility = "hidden"
    this.radioCreator = "https://www.youtube.com/watch?v=5qap5aO4i9A&feature=emb_title&ab_channel=ChilledCow"
    this.radioStation = "Now Playing: ChilledCow Lofi Radio"

    this.lofiColor = "accent"
    this.animalColor = "primary"
    this.gamingColor = "primary"
    this.indieColor = "primary"
    this.neotokyoColor = "primary"
    this.personaColor = "primary"
    this.jazzColor = "primary"
  }

  animal(radio) {
    this.getRandomVillager()
    radio.src = this.animalSource
    radio.style.visibility = "hidden"
    this.radioCreator = "https://www.youtube.com/watch?v=gjyQoz6f0qw&ab_channel=TimeMusicBox"
    this.radioStation = "Now Playing: Time Music Box Animal Crossing Radio"

    this.lofiColor = "primary"
    this.animalColor = "accent"
    this.gamingColor = "primary"
    this.indieColor = "primary"
    this.neotokyoColor = "primary"
    this.personaColor = "primary"
    this.jazzColor = "primary"
  }

  gaming(radio) {
    radio.src = "https://www.youtube.com/embed/Sdf5-3yddvA?autoplay=1"
    radio.style.visibility = "hidden"
    this.radioCreator = "https://www.youtube.com/watch?v=Sdf5-3yddvA&ab_channel=GameChops"
    this.radioStation = "Now Playing: GameChops Video Game Study Lounge"

    this.lofiColor = "primary"
    this.animalColor = "primary"
    this.gamingColor = "accent"
    this.indieColor = "primary"
    this.neotokyoColor = "primary"
    this.personaColor = "primary"
    this.jazzColor = "primary"
  }

  indie(radio) {
    radio.src = "https://www.youtube.com/embed/oVi5gtzTDx0?autoplay=1"
    radio.style.visibility = "hidden"
    this.radioCreator = "https://www.youtube.com/watch?v=oVi5gtzTDx0&ab_channel=NiceGuys"
    this.radioStation = "Now Playing: Nice Guys Indie Radio"

    this.lofiColor = "primary"
    this.animalColor = "primary"
    this.gamingColor = "primary"
    this.indieColor = "accent"
    this.neotokyoColor = "primary"
    this.personaColor = "primary"
    this.jazzColor = "primary"
  }

  neotokyo(radio) {
    this.getRandomRecon()
    radio.src = this.neotokyoSource
    radio.style.visibility = "hidden"
    this.radioCreator = "https://www.youtube.com/watch?v=0gi5-mEVEc4&ab_channel=Svings"
    this.radioStation = "Now Playing: Svings Stardew Valley Radio"

    this.lofiColor = "primary"
    this.animalColor = "primary"
    this.gamingColor = "primary"
    this.indieColor = "primary"
    this.neotokyoColor = "accent"
    this.personaColor = "primary"
    this.jazzColor = "primary"
  }

  persona(radio) {
    this.getRandomPersona()
    radio.src = this.personaSource
    radio.style.visibility = "hidden"
    this.radioCreator = "https://www.youtube.com/watch?time_continue=3645&v=C5V2NB5gZmo&feature=emb_title&ab_channel=FandomCollective"
    this.radioStation = "Now Playing: Fandom Collective Persona Radio"

    this.lofiColor = "primary"
    this.animalColor = "primary"
    this.gamingColor = "primary"
    this.indieColor = "primary"
    this.neotokyoColor = "primary"
    this.personaColor = "accent"
    this.jazzColor = "primary"
  }

  jazz(radio) {
    radio.src = "https://www.youtube.com/embed/fEvM-OUbaKs?autoplay=1"
    radio.style.visibility = "hidden"
    this.radioCreator = "https://www.youtube.com/watch?v=fEvM-OUbaKs&feature=emb_title&ab_channel=BGMchannel"
    this.radioStation = "Now Playing: BGM channel Jazz Radio"

    this.lofiColor = "primary"
    this.animalColor = "primary"
    this.gamingColor = "primary"
    this.indieColor = "primary"
    this.neotokyoColor = "primary"
    this.personaColor = "primary"
    this.jazzColor = "accent"
  }

  stop(radio) {
    radio.src = ""
    radio.style.visibility = "hidden"
    this.radioCreator = "https://grasscopper.github.io/apartment/"
    this.radioStation = "Radio Off"

    this.lofiColor = "primary"
    this.animalColor = "primary"
    this.gamingColor = "primary"
    this.indieColor = "primary"
    this.neotokyoColor = "primary"
    this.personaColor = "primary"
    this.jazzColor = "primary"
  }

  controlRadio(radio) { //past feature where clicking a radio graphic hid all radio buttons
    if (this.listening == false) {
      this.listening = true
      document.getElementsByClassName("lofi")[0].classList.remove("hide")
      document.getElementsByClassName("dubstep")[0].classList.remove("hide")
      document.getElementsByClassName("gaming")[0].classList.remove("hide")
      document.getElementsByClassName("stop")[0].classList.remove("hide")
    }
    else if (this.listening) {
      this.listening = false
      this.stop(radio)
      document.getElementsByClassName("lofi")[0].classList.add("hide")
      document.getElementsByClassName("dubstep")[0].classList.add("hide")
      document.getElementsByClassName("gaming")[0].classList.add("hide")
      document.getElementsByClassName("stop")[0].classList.add("hide")
    }
  }
}
