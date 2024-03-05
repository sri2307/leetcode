var nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;


var merge = function(nums1, m, nums2, n) {
    nums1.length=m;
    nums2.length=n;
    nums1.splice(m,nums1.length-m,...nums2)
    nums1.sort()
};


const output=merge(nums1,m,nums2,n)

console.log(output,nums1)