
const express = require('express')
import {handler7823} from "./handler7823";
const app = express()
app.get('/7823', handler7823)
app.listen(3000, () => {})
        