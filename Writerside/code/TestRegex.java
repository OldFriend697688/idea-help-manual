/**
 * 测试正则表达式的应用
 *
 * @author OldFriend
 */
public class TestRegex {
    private static final String PHONE_NUMBER_REGEX = "^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$";

    public static void main(String[] args) {
        isValidPhoneNumber(new String[]{"XXXXXXXXXXX", "XXXXXXXXXXX", "XXXXXXXXXXX"});
    }

    /**
     * 验证手机号码是否符合规范
     *
     * @param phoneNumbers 要验证的手机号
     */
    public static void isValidPhoneNumber(String... phoneNumbers) {
        for (String phoneNumber : phoneNumbers) {
            System.out.println(phoneNumber.matches(PHONE_NUMBER_REGEX) ? phoneNumber + "是正确的手机号码" : phoneNumber + "不是正确的手机号码");
        }
        System.out.println("");
    }
}
