
const express = require('express')
import {handler5774} from "./handler5774";
const app = express()
app.get('/5774', handler5774)
app.listen(3000, () => {})
        