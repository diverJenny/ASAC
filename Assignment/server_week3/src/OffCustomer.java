public class OffCustomer extends Customer{

    public OffCustomer(String name, String grade) {
        super(name, grade);
    }

    int offPayment() {
        return (int) (getAmountOfPayment() * (1 - getOffRate()));
    }

    @Override
    public String toString() {
        return "[" + getGrade() + "]" + " 안녕하세요. " + getName() + " 회원님. 회원님의 할인율은 " + getOffRate() + "입니다. " + "지불할 금액:" + offPayment();
    }
}
