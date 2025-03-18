
const express = require('express')
import {handler7135} from "./handler7135";
const app = express()
app.get('/7135', handler7135)
app.listen(3000, () => {})
        