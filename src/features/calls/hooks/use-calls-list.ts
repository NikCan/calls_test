import {ListType, useGetListMutation} from "../callsAPI";
import {useEffect} from "react";
import {useSearch} from "./use-search";

export const useCallsList = () => {
  const [getList, {data}] = useGetListMutation()
  const {search, searchParams} = useSearch()

  const rows = data?.results.map((el: ListType) => {
    return ({
      id: el.id,
      type: el.in_out,
      date: el.date,
      employee: el.person_avatar,
      call: el.from_number,
      source: el.source || 'неизвестный',
      grade: el.status,
      time: el.time,
      record: el.record,
      partnership_id: el.partnership_id
    })
  })
  useEffect(() => {
    getList({...search})
  }, [searchParams])

  return {
    rows
  }
}