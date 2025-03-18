
const express = require('express')
import {handler7979} from "./handler7979";
const app = express()
app.get('/7979', handler7979)
app.listen(3000, () => {})
        