
const express = require('express')
import {handler7056} from "./handler7056";
const app = express()
app.get('/7056', handler7056)
app.listen(3000, () => {})
        