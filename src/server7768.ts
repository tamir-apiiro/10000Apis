
const express = require('express')
import {handler7768} from "./handler7768";
const app = express()
app.get('/7768', handler7768)
app.listen(3000, () => {})
        