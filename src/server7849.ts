
const express = require('express')
import {handler7849} from "./handler7849";
const app = express()
app.get('/7849', handler7849)
app.listen(3000, () => {})
        