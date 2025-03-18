
const express = require('express')
import {handler7219} from "./handler7219";
const app = express()
app.get('/7219', handler7219)
app.listen(3000, () => {})
        