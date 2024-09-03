//ACTIVITY 1 : MEDIAN OF TWO SORTED ARRAYS

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = [];
    let i=0;
    let j=0;
    while(i<nums1.length && j<nums2.length){
        if(nums1[i]<nums2[j]){
            nums3.push(nums1[i]);
            i++;
        }
        else{
            nums3.push(nums2[j]);
            j++;
        }
    }
    while(i<nums1.length){
        nums3.push(nums1[i]);
        i++;
    }
    while(j<nums2.length){
        nums3.push(nums2[j]);
        j++;
    }
    n = nums3.length;
    if(n%2==0){
        return (nums3[parseInt((n-1)/2)] + nums3[parseInt((n+1)/2)])/2
    }
    return nums3[parseInt(n/2)];
};