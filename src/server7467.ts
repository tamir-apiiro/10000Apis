
const express = require('express')
import {handler7467} from "./handler7467";
const app = express()
app.get('/7467', handler7467)
app.listen(3000, () => {})
        