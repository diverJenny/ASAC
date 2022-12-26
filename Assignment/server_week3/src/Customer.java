import java.util.Objects;

public class Customer implements customerInterface {
    private String name;
    private String grade;
    private float offRate;
    private float bounusRate;
    private int bounusPoint;
    private int amountOfPayment = 10000;

    // 고객 생성자
    public Customer(String name, String grade) {
        if(grade.equals("Silver")) {
            offRate = bounusRate = 0.1F;
        } else if (grade.equals("Gold")) {
            offRate = bounusRate = 0.2F;
        } else {
            offRate = bounusRate = 0.3F;
        }
        this.name = name;
        this.grade = grade;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Customer customer = (Customer) o;
        return Objects.equals(name, customer.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name);
    }

    @Override
    public String toString() {
        return "customer{" +
                "name='" + name + '\'' +
                ", grade='" + grade + '\'' +
                ", amountOfPayment=" + amountOfPayment +
                '}';
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public float getOffRate() {
        return offRate;
    }

    public void setOffRate(float offRate) {
        this.offRate = offRate;
    }

    public float getBounusRate() {
        return bounusRate;
    }

    public void setBounusRate(float bounusRate) {
        this.bounusRate = bounusRate;
    }

    public int getBounusPoint() {
        return bounusPoint;
    }

    public void setBounusPoint(int bounusPoint) {
        this.bounusPoint = bounusPoint;
    }
    public int getAmountOfPayment() {
        return amountOfPayment;
    }

    public void setAmountOfPayment(int amountOfPayment) {
        this.amountOfPayment = amountOfPayment;
    }

}
