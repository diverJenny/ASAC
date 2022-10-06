import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Q10809FindAlphabet {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int[] arr = new int[26];
        String S = br.readLine();

        for(int i = 0; i < arr.length; i++) {
            arr[i] = -1;
        }

        for(int i = 0; i < S.length(); i++) {
            char c = S.charAt(i);

            if(arr[c - 'a'] == -1) {
                arr[c - 'a'] = i;
            }
        }

        for(int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}