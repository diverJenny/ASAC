import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Q4153_RightTriangle {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        while(true) {
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        int[] tri = {Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken())};

        if(tri[0] == 0 && tri[1] == 0 && tri[2] == 0) break;
        
        Arrays.sort(tri);

        if(tri[2]*tri[2] == tri[1]*tri[1] + tri[0]*tri[0]) System.out.println("right");
        else System.out.println("wrong");
        }
    }
}