
const express = require('express')
import {handler5788} from "./handler5788";
const app = express()
app.get('/5788', handler5788)
app.listen(3000, () => {})
        