import { Sub } from "../types"

interface Props {
  children: JSX.Element
  subs: Array<Sub>
}

// const List: React.FC<Props> = ({subs, children}) => {
const List = ({ subs, children }: Props) => {
  const renderList = (): JSX.Element[] => {
    return subs.map((sub, index) => (
      <li key={index}>
        <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
        <h4>
          {sub.nick} (<small>{sub.subMonths}</small>)
        </h4>
        <p>{sub.description?.substring(0, 10)}</p>
      </li>
    ))
  }

  return (
    <div>
      <ul>{renderList()}</ul>
      {children}
    </div>
  )
}

export default List
