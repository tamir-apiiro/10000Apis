
const express = require('express')
import {handler2762} from "./handler2762";
const app = express()
app.get('/2762', handler2762)
app.listen(3000, () => {})
        