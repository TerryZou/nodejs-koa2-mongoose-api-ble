exports.sum= (values)=>{
    var total = 0;
    for(var i = 0; i < values.length; i++)
        total += values[i];
    return total;
};

exports.avg=(values)=>{

    var total = exports.sum(values);
    var result = total/values.length;
    return result;
};

exports.variance= (values)=>{
    var squared_Diff = 0;
    var result = exports.avg(values);
    for(var i = 0; i < values.length; i++)
    {
        var deviation = values[i] - result;
        squared_Diff += deviation * deviation;
    }
    var variance = squared_Diff/(values.length);
    return variance;
};


