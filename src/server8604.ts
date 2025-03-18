
const express = require('express')
import {handler8604} from "./handler8604";
const app = express()
app.get('/8604', handler8604)
app.listen(3000, () => {})
        