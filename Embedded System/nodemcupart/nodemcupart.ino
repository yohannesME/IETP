//ThatsEngineering
//Sending Data from Arduino to NodeMCU Via Serial Communication
//NodeMCU code

//Include Lib for Arduino to Nodemcu
#include <SoftwareSerial.h>
#include <ArduinoJson.h>

#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>


// Replace with your network credentials
// const char* ssid = "wifi";
// const char* password = "12121212";
const char* ssid = "Galaxy M116858";
const char* password = "abcdefu1234";

//D6 = Rx & D5 = Tx
SoftwareSerial nodemcu(D6, D5);


void setup() {
  // Initialize Serial port
  Serial.begin(9600);
  nodemcu.begin(9600);
  WiFi.begin(ssid,password);

 while(WiFi.status() != WL_CONNECTED) { 
    delay(5000);
    Serial.print(".?");
  }
  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());

  while (!Serial) continue;
}

void loop() {
  while (!Serial) continue;
  StaticJsonDocument<1000> jsonDoc;
  DeserializationError error =  deserializeJson(jsonDoc,nodemcu);

  if (error) {
    jsonDoc.clear();
    return;
  }

  Serial.println("JSON Object Recieved");
  Serial.print("Recieved Humidity:  ");
  float hum = jsonDoc["humidity"];
  Serial.println(hum);
  Serial.print("Recieved Temperature:  ");
  float temp = jsonDoc["temperature"];
  Serial.println(temp);
  Serial.print("Recieved moisture one:  ");
  float moist1 = jsonDoc["moisture1"];
  Serial.println(moist1);
  Serial.print("Recieved moisture2:  ");
  float moist2 = jsonDoc["moisture2"];
  Serial.println(moist2);
  bool iswatering = jsonDoc["watering"];
  Serial.println("-----------------------------------------");


if(WiFi.status()== WL_CONNECTED){
    HTTPClient http;
    WiFiClient wifiClient;

    // REPLACE with your Domain name and URL path or IP address with path
    // String serverName = "http://192.168.43.89/sensorData/upload_sensor.php";
    String serverName = "http://192.168.43.89:3000/upload_sensor_data";

  String serverPath = serverName + "?temp=" + temp +  "&hum=" + hum + "&moist1=" + moist1
                          + "&moist2=" + moist2 + "&iswatering=" + iswatering + "";

    // Your Domain name with URL path or IP address with path
    http.begin(wifiClient,serverPath.c_str());

    Serial.println(serverPath);
    
    int status = http.GET();

    Serial.println(status);
    Serial.println("====done==");

    //free the resource
http.end();


  }
  else {
    Serial.println("WiFi Disconnected");
  }
  //Send an HTTP GET request every 15 seconds
  delay(3000);  
}

