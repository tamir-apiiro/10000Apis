
const express = require('express')
import {handler7591} from "./handler7591";
const app = express()
app.get('/7591', handler7591)
app.listen(3000, () => {})
        