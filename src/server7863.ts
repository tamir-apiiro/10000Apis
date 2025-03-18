
const express = require('express')
import {handler7863} from "./handler7863";
const app = express()
app.get('/7863', handler7863)
app.listen(3000, () => {})
        