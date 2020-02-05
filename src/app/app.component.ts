import { Component } from '@angular/core';
const data = {
  chart: {
    captionpadding: "0",
    origw: "320",
    origh: "300",
    gaugeouterradius: "115",
    gaugestartangle: "270",
    gaugeendangle: "-25",
    showvalue: "1",
    valuefontsize: "30",
    majortmnumber: "13",
    majortmthickness: "2",
    majortmheight: "13",
    minortmheight: "7",
    minortmthickness: "1",
    minortmnumber: "1",
    showgaugeborder: "0",
    theme: "fusion"
  },
  colorrange: {
    color: [
      {
        minvalue: "0",
        maxvalue: "110",
        code: "#999999"
      },
      {
        minvalue: "110",
        maxvalue: "280",
        code: "#F6F6F6"
      }
    ]
  },
  dials: {
    dial: [
      {
        value: "110",
        bgcolor: "#F20F2F",
        basewidth: "8"
      }
    ]
  },
  annotations: {
    groups: [
      {
        items: [
          {
            type: "text",
            id: "text",
            text: "mph",
            x: "$gaugeCenterX",
            y: "$gaugeCenterY + 40",
            fontsize: "20",
            color: "#555555"
          }
        ]
      }
    ]
  }
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  width = 600;
  height = 400;
  type = "angulargauge";
  dataFormat = "json";
  dataSource = data;
}
