'use client'
import { themed } from '@/endpoints/themed'
import { useQuery, QueryClientProvider } from 'react-query'


export const useColorsThemed = () => useQuery(['themed'], () => themed())