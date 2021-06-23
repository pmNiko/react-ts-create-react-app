import axios from "axios"
import { useEffect, useRef, useState } from "react"
import "./App.css"
import Form from "./components/Form"
import List from "./components/List"
import { Sub, SubsResponseFromApi } from "./types"

// const INITIAL_STATE = [
//   {
//     nick: "Nikolas",
//     subMonths: 3,
//     avatar: "https://i.pravatar.cc/150?img=70=Nikolas",
//     description: "A description",
//   },
//   {
//     nick: "Mario",
//     subMonths: 4,
//     avatar: "https://i.pravatar.cc/150?img=58=Mario",
//   },
// ]

interface AppSatate {
  subs: Array<Sub>
  newSubsNumber: number
}

function App() {
  const divRef = useRef<HTMLDivElement>(null)
  const [subs, setSubs] = useState<AppSatate["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppSatate["newSubsNumber"]>(0)

  const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Array<Sub> => {
    return apiResponse.map((subFromApi) => {
      const {
        title: nick,
        albumId: subMonths,
        thumbnailUrl: avatar,
        url: description,
      } = subFromApi

      return { nick, subMonths, avatar, description }
    })
  }

  useEffect(() => {
    // const fetchSubs = (): Promise<SubsResponseFromApi> => {
    //   return fetch("https://jsonplaceholder.typicode.com/photos")
    //     .then((res) => res.json())
    //     .then((data) => data.slice(0, 10))
    // }
    const fetchSubs = async (): Promise<SubsResponseFromApi> => {
      return await axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then((res) => res.data)
        .then((data) => data.slice(0, 3))
    }
    fetchSubs().then(mapFromApiToSubs).then(setSubs)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub])
    setNewSubsNumber((n) => n + 1)
  }

  return (
    <div className="App" ref={divRef}>
      <h1>Subscriptores</h1>
      <List subs={subs}>
        <h1>Hello children</h1>
      </List>
      <h4>New subs: {newSubsNumber}</h4>
      <Form onNewSub={handleNewSub} />
    </div>
  )
}

export default App
