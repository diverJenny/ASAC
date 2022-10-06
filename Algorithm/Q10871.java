import java.util.Scanner;

public class Q10871 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int X = sc.nextInt();
        
        StringBuilder sb = new StringBuilder();

        for(int i=0; i<N; i++) {
            int val = sc.nextInt();
            if(val < X) {
                sb.append(val + " ");
            }
        }

        System.out.println(sb);

    }
}
