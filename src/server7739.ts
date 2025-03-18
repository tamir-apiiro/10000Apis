
const express = require('express')
import {handler7739} from "./handler7739";
const app = express()
app.get('/7739', handler7739)
app.listen(3000, () => {})
        