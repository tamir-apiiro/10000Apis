
const express = require('express')
import {handler7054} from "./handler7054";
const app = express()
app.get('/7054', handler7054)
app.listen(3000, () => {})
        