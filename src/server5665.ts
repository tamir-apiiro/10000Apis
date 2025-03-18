
const express = require('express')
import {handler5665} from "./handler5665";
const app = express()
app.get('/5665', handler5665)
app.listen(3000, () => {})
        