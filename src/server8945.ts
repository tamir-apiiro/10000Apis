
const express = require('express')
import {handler8945} from "./handler8945";
const app = express()
app.get('/8945', handler8945)
app.listen(3000, () => {})
        