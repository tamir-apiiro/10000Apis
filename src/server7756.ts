
const express = require('express')
import {handler7756} from "./handler7756";
const app = express()
app.get('/7756', handler7756)
app.listen(3000, () => {})
        