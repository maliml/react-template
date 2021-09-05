
import { net } from "@/util/net";

export function getSuggest(key) {
  return net.get(`https://sp0.tianyancha.com/search/suggestV2.json?key=${key}`)
}


