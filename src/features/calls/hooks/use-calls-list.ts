import {ListType, useGetListMutation} from "../callsAPI";
import {useEffect} from "react";
import {useSearch} from "./use-search";

export const useCallsList = () => {
  const [getList, {data, isLoading}] = useGetListMutation()
  const {search, searchParams} = useSearch()
  const rows = data?.results.map((el: ListType) => ({
    id: el.id,
    type: el.in_out,
    date: el.date,
    employee: el.person_avatar,
    call: el.from_number,
    source: el.source || 'неизвестный',
    grade: el.status,
    time: el.time
  }))
  useEffect(() => {
    getList({...search})
  }, [searchParams])

  return {
    rows,
    isLoading,
    getList
  }
}