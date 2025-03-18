
const express = require('express')
import {handler2263} from "./handler2263";
const app = express()
app.get('/2263', handler2263)
app.listen(3000, () => {})
        