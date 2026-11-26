// =====================================================
// config.js: Inhalte dieser Seite (hier darf die Gruppe ändern)
// =====================================================

// Dateiname des 3D-Modells (.obj oder .glb), muss GENAU so heißen wie die Datei im Ordner models/
const MODEL_FILE = "./models/camera.obj";

// Größe des Modells in Marker-Breiten (1 = so breit wie die Marke)
const MODEL_SIZE = 0.5;

// Abstand des Modells vor der Marke (kleiner = ruhiger, 0 = direkt auf der Marke)
const MODEL_Z = 0.1;

// Grunddrehung in Grad "x y z", z. B. "0 180 0" oder "90 0 0"
const START_ROT = "0 0 0";

// Seitenverhältnis der Marke (Höhe / Breite)
const MARKER_ASPECT = 0.727;

// Hotspots: position = "x y z" relativ zur Modellmitte, size = Radius, title = Überschrift, text = Infotext.
// Am einfachsten einstellen mit ?preview am Ende der Adresse, dann "config.js speichern".
const HOTSPOTS = [
  {
    position: "0.085 -0.044 0.088",
    size: 0.010,
    title: "Objektiv",
    text: "Das Objektiv bündelt das Licht und erzeugt das Bild auf dem Sensor. Die Brennweite bestimmt den Bildausschnitt, die Blende die Lichtmenge und die Schärfentiefe. Test 3"
  },
  {
    position: "0.12 0.1 0",
    size: 0.040,
    title: "Sucher",
    text: "Im Sucher siehst du das Motiv vor der Aufnahme und kannst den Bildausschnitt festlegen. Meist werden hier auch Blende, Belichtungszeit und ISO eingeblendet."
  },
  {
    position: "-0.12 0.1 0",
    size: 0.040,
    title: "Auslöser",
    text: "Ein halber Druck stellt meist scharf und misst das Licht. Beim vollen Druck öffnet sich der Verschluss, wie lange, bestimmt die Belichtungszeit."
  },
  {
    position: "0 0 0.1",
    size: 0.040,
    title: "Neuer Punkt",
    text: "Hier Text eingeben."
  },
  {
    position: "-0.155 -0.138 0.119",
    size: 0.040,
    title: "Neuer Punkt",
    text: "Test4"
  }
];
