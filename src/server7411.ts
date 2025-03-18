
const express = require('express')
import {handler7411} from "./handler7411";
const app = express()
app.get('/7411', handler7411)
app.listen(3000, () => {})
        