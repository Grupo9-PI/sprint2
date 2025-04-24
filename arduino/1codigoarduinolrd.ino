const int PINO_SENSOR_LDR = A4;
int valorLuminosidade;

void setup() {
  Serial.begin(9600);
}
  
void loop() {
  valorLuminosidade = analogRead(PINO_SENSOR_LDR);


//  Serial.print("Luminosidade: ");
  Serial.println(valorLuminosidade);

  delay(5000);
}