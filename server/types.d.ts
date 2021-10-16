import { Document } from 'mongoose'

export interface HtmlUpdate {
  content: string
}

export interface HtmlUpdateDb extends HtmlUpdate, Document {}
