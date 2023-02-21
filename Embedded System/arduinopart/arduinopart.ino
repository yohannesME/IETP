//ThatsEngineering
//Sending Data from Arduino to NodeMCU Via Serial Communication
//Arduino code

//DHT11 Lib
#include <dht.h>

//Arduino to NodeMCU Lib
#include <SoftwareSerial.h>
#include <ArduinoJson.h>

//Initialise Arduino to NodeMCU (5=Rx & 6=Tx)
SoftwareSerial nodemcu(5, 6);

//Initialisation of DHT11 Sensor
#define DHTPIN 2
#define RELAY 7

dht DHT;

float temp;
float hum;
float moist1;
float moist2;
bool iswatering;

void setup() {
  Serial.begin(9600);
  pinMode(RELAY, OUTPUT);
  // dht.begin();
  nodemcu.begin(9600);
  delay(1000);

  Serial.println("Program started");
}

void loop() {

  StaticJsonDocument<1000> doc;
  //Obtain Temp and Hum data
  dht11_func();

  if(!isnan(hum)){

  iswatering = shouldWater();


  //Assign collected data to JSON Object
  doc["humidity"] = hum;
  doc["temperature"] = temp; 
  doc["moisture1"] = moist1; 
  doc["moisture2"] = moist2; 
  doc["watering"] = iswatering;

  //Send data to NodeMCU

  serializeJson(doc,nodemcu);
  doc.clear();

  // if(!iswatering){
  //   //normally if not watering check every 10 minutes
  //   delay(60000*10);
  // }else{
  //   //if watering check every 30 second how it is doing
  //   delay(30000);
  // }
  delay(5000);
  }
}


float moisturePercent(float analog){
  //analog moisture data into percentage
  return 100 - ((analog/1023.00)*100);
}

void dht11_func() {
    int readData = DHT.read22(DHTPIN); // Reads the data from the sensor
   temp = DHT.temperature; // Gets the values of the temperature
   hum = DHT.humidity; // Gets the values of the humidity

  moist1 = moisturePercent(analogRead(A0));
  moist2 = moisturePercent(analogRead(A1));
  Serial.print("Humidity: ");
  Serial.println(hum);
  Serial.print("Temperature: ");
  Serial.println(temp);
  Serial.print("moisture1: ");
  Serial.println(moist1);
  Serial.print("moisture 2: ");
  Serial.println(moist2);
}



bool shouldWater(){
  float averageMoisture = (moist1 + moist2)/2;

  if(averageMoisture < 45 && temp < 27 ){
    //turn on water
    digitalWrite(RELAY,LOW);
    Serial.println("on watering");
    return true;
  }else{
    //turn off the water
    digitalWrite(RELAY,HIGH  );
    Serial.println("not Watering");
    return false;
  }
}
