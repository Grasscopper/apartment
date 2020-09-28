import { Component } from '@angular/core'

@Component({
  selector: "app-apartment",
  templateUrl: "./apartment.component.html",
  styleUrls: ["./apartment.component.css"]
})

export class ApartmentComponent {
  listening = false
  radioSource = "https://grasscopper.github.io/apartment/"
  radioStation = "Radio Off"

  lofiColor = "primary"
  dubstepColor = "primary"
  gamingColor = "primary"
  indieColor = "primary"
  jazzColor = "primary"

  lofi(radio) {
    radio.src = "https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1"
    radio.style.visibility = "hidden"
    this.radioSource = "https://www.youtube.com/watch?v=5qap5aO4i9A&feature=emb_title&ab_channel=ChilledCow"
    this.radioStation = "Now Playing: ChilledCow Lofi Radio"

    this.lofiColor = "accent"
    this.dubstepColor = "primary"
    this.gamingColor = "primary"
    this.indieColor = "primary"
    this.jazzColor = "primary"
  }

  dubstep(radio) {
    radio.src = "https://www.youtube.com/embed/Oxj2EAr256Y?autoplay=1"
    radio.style.visibility = "hidden"
    this.radioSource = "https://www.youtube.com/watch?v=Oxj2EAr256Y&feature=emb_title&ab_channel=MonstafluffMusic"
    this.radioStation = "Now Playing: Monstafluff Music Dubstep Radio"

    this.lofiColor = "primary"
    this.dubstepColor = "accent"
    this.gamingColor = "primary"
    this.indieColor = "primary"
    this.jazzColor = "primary"
  }

  gaming(radio) {
    radio.src = "https://www.youtube.com/embed/P1k4jGwhKF0?autoplay=1"
    radio.style.visibility = "hidden"
    this.radioSource = "https://www.youtube.com/watch?v=P1k4jGwhKF0&feature=emb_title&ab_channel=GameChops"
    this.radioStation = "Now Playing: GameChops Gaming Radio"

    this.lofiColor = "primary"
    this.dubstepColor = "primary"
    this.gamingColor = "accent"
    this.indieColor = "primary"
    this.jazzColor = "primary"
  }

  indie(radio) {
    radio.src = "https://www.youtube.com/embed/oVi5gtzTDx0?autoplay=1"
    radio.style.visibility = "hidden"
    this.radioSource = "https://www.youtube.com/watch?v=oVi5gtzTDx0&ab_channel=NiceGuys"
    this.radioStation = "Now Playing: Nice Guys Indie Radio"

    this.lofiColor = "primary"
    this.dubstepColor = "primary"
    this.gamingColor = "primary"
    this.indieColor = "accent"
    this.jazzColor = "primary"
  }

  jazz(radio) {
    radio.src = "https://www.youtube.com/embed/fEvM-OUbaKs?autoplay=1"
    radio.style.visibility = "hidden"
    this.radioSource = "https://www.youtube.com/watch?v=fEvM-OUbaKs&feature=emb_title&ab_channel=BGMchannel"
    this.radioStation = "Now Playing: BGM channel Jazz Radio"

    this.lofiColor = "primary"
    this.dubstepColor = "primary"
    this.gamingColor = "primary"
    this.indieColor = "primary"
    this.jazzColor = "accent"
  }


  stop(radio) {
    radio.src = ""
    radio.style.visibility = "hidden"
    this.radioSource = "https://grasscopper.github.io/apartment/"
    this.radioStation = "Radio Off"

    this.lofiColor = "primary"
    this.dubstepColor = "primary"
    this.gamingColor = "primary"
    this.indieColor = "primary"
    this.jazzColor = "primary"
  }

  controlRadio(radio) {
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
