
const express = require('express')
import {handler5054} from "./handler5054";
const app = express()
app.get('/5054', handler5054)
app.listen(3000, () => {})
        