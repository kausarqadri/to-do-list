
export default function Profile(){
    const user = {
        fullName: "kausarQadri",
        age: 23,
        income: "4800000/years",
        isMarried: false,

    }
    return(
        <>
        <h2>Profile</h2>
        <h2>{user.fullName}</h2>
        <br/>
        <p>Age</p>
        <p>{user.age}</p>
        <br/>
        <p>Income</p>
        <p>{user.income}</p>
        <p>Is he married</p>
        <p>{user.isMarried}</p>
        </>
    )
}