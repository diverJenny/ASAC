import java.util.Scanner;

public class Q11_Break_evenPoint {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int A = sc.nextInt();
        int B = sc.nextInt();
        int C = sc.nextInt();

        sc.close();

        if(C <= B) {
            System.out.println("-1");
        }
        else {
            System.out.println(A/(C-B)+1);
        }
    }
}