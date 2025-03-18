
const express = require('express')
import {handler200} from "./handler200";
const app = express()
app.get('/200', handler200)
app.listen(3000, () => {})
        