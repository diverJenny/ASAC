import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class EscapeFromRectangle {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // 입력받은 문자열을 공백으로 분리
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        // 입력받은 문자열을 Integer.parseInt()로 정수형으로 변환
        int x = Integer.parseInt(st.nextToken());
        int y = Integer.parseInt(st.nextToken());
        int w = Integer.parseInt(st.nextToken());
        int h = Integer.parseInt(st.nextToken());

        int xMin = Math.min(x, w-x);
        int yMin = Math.min(y, h-y);

        System.out.println(Math.min(xMin, yMin));
    }
}
