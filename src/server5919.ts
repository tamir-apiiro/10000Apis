
const express = require('express')
import {handler5919} from "./handler5919";
const app = express()
app.get('/5919', handler5919)
app.listen(3000, () => {})
        