
const express = require('express')
import {handler5398} from "./handler5398";
const app = express()
app.get('/5398', handler5398)
app.listen(3000, () => {})
        