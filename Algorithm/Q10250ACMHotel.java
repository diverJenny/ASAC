import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Q10250ACMHotel {
    public static void main(String[] args) throws NumberFormatException, IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder roomNo = new StringBuilder();
        int T = Integer.parseInt(br.readLine());
        
        for(int i=0; i<T; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine(), " ");
            int H = Integer.parseInt(st.nextToken());
            st.nextToken();
            int N = Integer.parseInt(st.nextToken());

            if(N % H == 0) {
                roomNo.append((H * 100) + (N / H)).append("\n");
            }
            else roomNo.append((N % H * 100) + (N / H) + 1).append("\n");
        }

        System.out.println(roomNo);
    }
}