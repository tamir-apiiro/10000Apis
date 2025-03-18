
const express = require('express')
import {handler5514} from "./handler5514";
const app = express()
app.get('/5514', handler5514)
app.listen(3000, () => {})
        