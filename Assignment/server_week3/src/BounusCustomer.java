public class BounusCustomer extends Customer{
    public BounusCustomer(String name, String grade) {
        super(name, grade);
    }

    int bounusPayment() {
        int bounusPoint = (int) (getAmountOfPayment() * (getBounusRate()));
        setBounusPoint(bounusPoint);
        return bounusPoint;
    }

    @Override
    public String toString() {
        return "[" + getGrade() + "]" +
                " 안녕하세요. " + getName() +
                " 안녕하세요. " + getName() +
                " 회원님. 회원님의 적립률은 " +
                getBounusRate() + "입니다. " +
                "보너스 포인트" + bounusPayment() + "가 적립되었습니다. " +
                "현재 보너스 포인트 " + getBounusPoint() +
                "지불할 금액:" + getAmountOfPayment();
    }
}
