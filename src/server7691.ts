
const express = require('express')
import {handler7691} from "./handler7691";
const app = express()
app.get('/7691', handler7691)
app.listen(3000, () => {})
        