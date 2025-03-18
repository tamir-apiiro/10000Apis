
const express = require('express')
import {handler7719} from "./handler7719";
const app = express()
app.get('/7719', handler7719)
app.listen(3000, () => {})
        