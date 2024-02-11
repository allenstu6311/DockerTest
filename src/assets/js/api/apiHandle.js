class ApiHandle {

    handleProductInfo(res){
        if(!res && !res.data) return null

        if(Array.isArray(res.data)){
            return res.data
        }
        return [res.data]
    }
}

const apiHandle = new ApiHandle()

export default apiHandle