import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Q2562Maximum {
    public static void main(String[] args) throws NumberFormatException, IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int max = 0;
        int idx = 0;

        for(int i=1; i<=9; i++) {
            int val = Integer.parseInt(br.readLine());
            if(val > max) {
                max = val;
                idx = i;
            }
        }

        System.out.println(max + "\n" + idx);
    }
}