
const express = require('express')
import {handler7263} from "./handler7263";
const app = express()
app.get('/7263', handler7263)
app.listen(3000, () => {})
        