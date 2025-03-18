
const express = require('express')
import {handler5202} from "./handler5202";
const app = express()
app.get('/5202', handler5202)
app.listen(3000, () => {})
        