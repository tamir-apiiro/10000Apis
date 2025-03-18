
const express = require('express')
import {handler7066} from "./handler7066";
const app = express()
app.get('/7066', handler7066)
app.listen(3000, () => {})
        