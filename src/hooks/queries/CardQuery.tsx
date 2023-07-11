import {useInfiniteQuery} from '@tanstack/react-query'
import {getData} from '../../utils/utility'
import {EndPoint} from '../../dataManager/apiMapper'

export const useGetInfiniteCards = () => {
  const maxPages: number = 20
  return useInfiniteQuery({
    queryKey: ['GetPageData'],
    queryFn: ({pageParam = 0}) => {
      return getData(EndPoint.GET_OPENSEA_IMAGES, {limit: 20, offset: pageParam})
    },
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length < maxPages ? allPages.length : undefined
    },
    retry: 1,
  })
}
