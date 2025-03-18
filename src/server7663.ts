
const express = require('express')
import {handler7663} from "./handler7663";
const app = express()
app.get('/7663', handler7663)
app.listen(3000, () => {})
        