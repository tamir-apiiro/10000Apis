
const express = require('express')
import {handler385} from "./handler385";
const app = express()
app.get('/385', handler385)
app.listen(3000, () => {})
        