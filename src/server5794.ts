
const express = require('express')
import {handler5794} from "./handler5794";
const app = express()
app.get('/5794', handler5794)
app.listen(3000, () => {})
        