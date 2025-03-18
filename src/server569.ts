
const express = require('express')
import {handler569} from "./handler569";
const app = express()
app.get('/569', handler569)
app.listen(3000, () => {})
        