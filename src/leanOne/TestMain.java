package leanOne;

import java.util.Arrays;

/**
 * ProjectName: LeanHtml
 * describe:
 * create by "zhangDong"
 * createDate: 2019/11/20 0020
 * createTime: 9:38
 */
public class TestMain {

    /**
     * nums = [2, 7, 11, 15], target = 9
     *
     * @param args
     */
    public static void main(String[] args) {

        System.out.println("hello world");

        int[] nums = new int[]{2, 7, 11, 15};

        int target = 9;


        int[] ints = twoSum(nums, target);
        System.out.println(Arrays.toString(ints));
    }

    public static int[] twoSum(int[] nums, int target) {

        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {

            }
        }
        return nums;
    }

}
