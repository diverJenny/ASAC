import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Q11720SumOfNumbers {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        br.readLine();
        int sum = 0;

        for(int val : br.readLine().getBytes()) {
            sum += (val - '0');
        }
        System.out.println(sum);
    }
}
