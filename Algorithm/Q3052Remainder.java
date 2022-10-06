import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;

public class Q3052Remainder {
    public static void main(String[] args) throws NumberFormatException, IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        HashSet<Integer> hs = new HashSet<Integer>();

        for(int i = 0; i < 10; i++) {
            hs.add(Integer.parseInt(br.readLine()) % 42);
        }
        
        System.out.println(hs.size());
    }
}
