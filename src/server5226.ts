
const express = require('express')
import {handler5226} from "./handler5226";
const app = express()
app.get('/5226', handler5226)
app.listen(3000, () => {})
        