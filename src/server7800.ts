
const express = require('express')
import {handler7800} from "./handler7800";
const app = express()
app.get('/7800', handler7800)
app.listen(3000, () => {})
        