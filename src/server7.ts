
const express = require('express')
import {handler7} from "./handler7";
const app = express()
app.get('/7', handler7)
app.listen(3000, () => {})
        