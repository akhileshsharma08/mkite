import { NextResponse } from "next/server"

const url ="https://6458a1858badff578ef64314.mockapi.io/mkite"

export const GET =async (req,res)=>{
    const response = await fetch(url)
    const result = await response.json()
    console.log(result ,"get api called")
    if(result.data.email=="its.akhilesh23@gmail.com"){console.log("matched")}
    return NextResponse.json({data:result})
    // return NextResponse.json({message:"matched"})
}


////////////////// =============== POST 

export const POST =async(req)=>{
    const body= await req.json()

    const res=await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
    })

    const result = await res.json()

    return NextResponse.json({result})
}
////////////////// =============== PUT 

export const PUT =async(req,con)=>{
    // const body= await req.json()

    const {id} = req.query

    const res=await fetch(`https://6458a1858badff578ef64314.mockapi.io/mkite/3`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
      
    })

    const result = await res.json()

    return NextResponse.json({result})
}

// ============ delete ===============

export const DELETE = async (req)=>{
    // const {id }= req.params

    const resp = await  fetch(`https://6458a1858badff578ef64314.mockapi.io/mkite/3`,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json'
        }
    })
const result = await resp.json()
return NextResponse.json({result})
}