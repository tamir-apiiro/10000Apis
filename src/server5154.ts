
const express = require('express')
import {handler5154} from "./handler5154";
const app = express()
app.get('/5154', handler5154)
app.listen(3000, () => {})
        