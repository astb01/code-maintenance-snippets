public class Mechanic {

  public void serviceCar(){
    // prepare car
    // perform tyre check
    // perform oil change
    System.out.println("Serviced car");
    // ...
  }

  public void serviceBike(){
        // prepare car          // << ----------- REPEATED LOGIC
    // perform tyre check
    // perform oil change
    System.out.println("Serviced car");
    // ...    
  }

  public static void main(String [] args){
    Mechanic mechanic = new Mechanic();
    mechanic.serviceCar();
    mechanic.serviceBike();
  }
}



