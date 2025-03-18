
const express = require('express')
import {handler7543} from "./handler7543";
const app = express()
app.get('/7543', handler7543)
app.listen(3000, () => {})
        