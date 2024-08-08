/**
 * 类型迁移（Ctrl + Shift + F6）可以将所有具备关联关系的内容（变量、常量、类型参数等）的数据类型统一迁移为指定的数据类型
 *
 * @author OldFriend
 */
public class TestTypeMigration {
    /*
     * 变量 x 的数据类型不会被迁移，因为它未被直接或者是间接使用
     * 变量 f 的数据类型会一并被迁移，因为它被作为 bar 方法的实参
     * */
    int x = 0;
    String f;

    void bar(String i) {
    }

    void foo() {
        bar(f);
    }

    /**
     * 接口名称后的 <T> 代表的是类型参数，这意味着该接口可以用于操作任何数据类型
     * */
    interface I<T> {
        // 该方法必须接受一个类型为 T 的参数，并返回一个类型为 T 的值
        T foo(T t);

        // 该方法的形参和返回值均未使用类型参数，这意味着如果对类型参数的数据类型进行迁移时该方法不会受任何影响
        void add(String a, String b);
    }

    /**
     * A 类实现自 I 接口并约束类型参数的类型为 java.lang.Integer
     * */
    class A implements I<String> {
        String myString;

        public String foo(final String s) {
            if (s == null) {
                return myString;
            }
            return s;
        }

        @Override
        public void add(String a, String b) {
            System.out.println(Integer.valueOf(a) + Integer.valueOf(b));
        }
    }
}