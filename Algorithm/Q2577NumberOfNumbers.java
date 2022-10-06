import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Q2577NumberOfNumbers {
    public static void main(String[] args) throws NumberFormatException, IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int total = 1;

        for(int i=0; i<3; i++) {
            total*=Integer.parseInt(br.readLine());
        }
        //System.out.println(total);

        String totStr = Integer.toString(total);
        for(int i=0; i<10; i++) {
            int cnt = 0;
            for(int j=0; j<totStr.length(); j++) {
                if(i == totStr.charAt(j) - '0') {
                    cnt++;
                }
            }
            System.out.println(cnt);
        }
    }
}
