
const express = require('express')
import {handler7916} from "./handler7916";
const app = express()
app.get('/7916', handler7916)
app.listen(3000, () => {})
        