import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  showMe: boolean = false;
  showConversation: boolean = false;

  kincso = [{ "profile": "kincso", "name": "Nemes Kincső", "message": "", "time": "" }];
  peter_1 = [{ "profile": "peter", "name": "Kiss Péter", "message": "Mondtam már neked, hogy mi történt vel...", "time": "13:20"}];
  reka = [{ "profile": "reka", "name": "Mester Klára Réka", "message": "Elment. Neked milyen volt?", "time": "12:03"}];
  emma = [{"profile": "emma", "name": "Nagy Emma", "message": "Elment. Neked milyen volt?", "time": "12:03"}];
  peter_2 = [{"profile": "peter", "name": "Kiss Péter", "message": "Mondtam már neked, hogy mi történt vel...", "time": "11:20"}];
  karoly_1 = [{"profile": "karoly", "name": "Mester Károly", "message": "Elment. Neked milyen volt?", "time": "10:03"}];
  karoly_2 = [{"profile": "mester_karoly", "name": "Mester Károly", "message": "Elment. Neked milyen volt?", "time": "Tegnap"}];

  first_message = [
    {"text": "Szia! Próba Petra!"},
  ];

  second_message = [
    {"text": "Szia! Kincső! Milyen volt a napod?"},

  ];

  third_message = [
    {"text": "Képzeld el, ma elmentem a boltba, ott nem volt semmi különös, de ami utána történt nem hiszed el. Nem is igazán tudom, hogy kellene elmondanom neked. Találkoztam az egyik nagy focista példaképemmel!"},
  ];

  fourth_message = [
    {"text": "Ki volt az? Mondjad már, ne húzd ennyire az időt. Mindjárt mennem kell a boltba."}
  ];

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "message_bg",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/message_bg.svg"));

    this.matIconRegistry.addSvgIcon(
      "svg_folder",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg_folder.svg"));

    this.matIconRegistry.addSvgIcon(
      "kincso",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/kincso.svg"));

    this.matIconRegistry.addSvgIcon(
      "peter",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/peter.svg"));

    this.matIconRegistry.addSvgIcon(
      "reka",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/reka.svg"));

    this.matIconRegistry.addSvgIcon(
      "emma",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/emma.svg"));

    this.matIconRegistry.addSvgIcon(
      "karoly",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/karoly.svg"));

    this.matIconRegistry.addSvgIcon(
      "mester_karoly",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/mester_karoly.svg"));

    this.matIconRegistry.addSvgIcon(
      "sticker",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/sticker.svg"));
  }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.showMe = !this.showMe;
  }

  toggleConversation(){
    this.showConversation = true;
  }

}
