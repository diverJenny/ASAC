public class Main {
    public static void main(String[] args) {
        Customer customer1 = new OffCustomer("이순신", "Silver");
//        System.out.println(customer1.toString());
//        Customer customer2 = new Customer("이순신", "Silver");
//        System.out.println(customer1.equals(customer2));
//        System.out.println(customer1.getName());

        Customer customer3 = new OffCustomer("신사임당", "Gold");
//        System.out.println(customer3);
        Customer customer4 = new BounusCustomer("이율곡", "Silver");
//        System.out.println(customer4);
        Customer customer5 = new OffCustomer("홍길동", "VIP");
        Customer customer6 = new BounusCustomer("김유신", "Gold");
        Customer customer7 = new BounusCustomer("권율", "VIP");

        System.out.println(customer1);
        System.out.println(customer3);
        System.out.println(customer4);
        System.out.println(customer5);
        System.out.println(customer6);
        System.out.println(customer7);
    }
}