import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class fourthPoint {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        
        int a[] = {Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken())};
        st = new StringTokenizer(br.readLine(), " ");
        int b[] = {Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken())};
        st = new StringTokenizer(br.readLine(), " ");
        int c[] = {Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken())};

        int d[] = new int[2];

        // x좌표가 짝 확인.
        if(a[0] == b[0]) d[0] = c[0];
        else if(a[0] == c[0]) d[0] = b[0];
        else d[0] = a[0];

        // y좌표 짝 확인
        if(a[1] == b[1]) d[1] = c[1];
        else if(a[1] == c[1]) d[1] = b[1];
        else d[1] = a[1];

        //System.out.println(Arrays.toString(d).replaceAll("\\[", "").replaceAll(",", "").replaceAll("\\]", ""));
        System.out.println(d[0] + " " + d[1]);
    }
}
