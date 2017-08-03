//判断字符串是否为空
exports.isNullOrEmpty=(str)=>{
	if(str!=null&&str!=undefined&&str!=""&&str.length>0)
	{
		return false;
	}
	return true;
};
