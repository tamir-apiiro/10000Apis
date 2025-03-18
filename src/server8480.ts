
const express = require('express')
import {handler8480} from "./handler8480";
const app = express()
app.get('/8480', handler8480)
app.listen(3000, () => {})
        