import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Q3053TaxiGeometry {
    public static void main(String[] args) throws NumberFormatException, IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        double R = Double.parseDouble(br.readLine());

        System.out.println(String.format("%6f", Math.pow(R, 2) * Math.PI));
        System.out.println(String.format("%6f", R * R * 2));
    }
}
