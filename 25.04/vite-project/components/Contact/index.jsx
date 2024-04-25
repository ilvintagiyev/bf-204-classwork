import List from "../List"
import ListItem from "../Listitem"


export const Contact = ({data}) => {
  return (
   <List>
    {data && data.map((prod)=>{
        return <ListItem key={prod.id} product={prod}/>
    })}
   </List>
  )
}
export default Contact
