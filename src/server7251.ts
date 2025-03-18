
const express = require('express')
import {handler7251} from "./handler7251";
const app = express()
app.get('/7251', handler7251)
app.listen(3000, () => {})
        