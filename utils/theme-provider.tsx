'use client'
import * as React from 'react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import type {ThemeProviderProps } from 'next-themes/dist/types';
import config from "@/app/config";
export function ThemeProvider({children,...props}: ThemeProviderProps){
     return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}