
const express = require('express')
import {handler7446} from "./handler7446";
const app = express()
app.get('/7446', handler7446)
app.listen(3000, () => {})
        