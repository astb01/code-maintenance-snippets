public class Mechanic {

  public void serviceVehicle(Vehicle vehicle){
    vehicle.doService();
  }

  public static void main(String [] args){
    Mechanic mechanic = new Mechanic();
    mechanic.serviceVehicle(new Car("Audi", "A3", "YD23 TRY"));
  }
}

/**
  Class that represents a Car and all it's features.
 */
public class Car implements Vehicle {
  private String manufacturer;
  private String model;
  private String regNo;

  public Car(String manufacturer, String model, String regNo) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.regNo = regNo;
  }

  void doService(){
    // prepare car
    // perform tyre check
    // perform oil change
    System.out.println("Serviced car");
    // ...
  }
}

public interface Vehicle {
  void doService();
}

