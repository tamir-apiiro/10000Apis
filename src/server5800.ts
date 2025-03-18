
const express = require('express')
import {handler5800} from "./handler5800";
const app = express()
app.get('/5800', handler5800)
app.listen(3000, () => {})
        