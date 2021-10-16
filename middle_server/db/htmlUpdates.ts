import { getModelForClass, prop } from "@typegoose/typegoose"

class HtmlUpdate {
  @prop({ required: true })
  public content!: string
}

const HtmlUpdateModel = getModelForClass(HtmlUpdate)

export async function createSample() {
  const sample = await HtmlUpdateModel.create({ content: 'hello' })
  await sample.save()
  console.log('created')
}

export async function getFirst() {
  const htmlUpdates = await HtmlUpdateModel.find()
  if (htmlUpdates.length) {
    const firstHtmlUpdate = htmlUpdates[0]
    console.log(firstHtmlUpdate.content)
  } else {
    console.log('no html updates')
  }
}