
const express = require('express')
import {handler5051} from "./handler5051";
const app = express()
app.get('/5051', handler5051)
app.listen(3000, () => {})
        