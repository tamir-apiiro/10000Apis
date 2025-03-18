
const express = require('express')
import {handler5344} from "./handler5344";
const app = express()
app.get('/5344', handler5344)
app.listen(3000, () => {})
        