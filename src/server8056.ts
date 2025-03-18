
const express = require('express')
import {handler8056} from "./handler8056";
const app = express()
app.get('/8056', handler8056)
app.listen(3000, () => {})
        