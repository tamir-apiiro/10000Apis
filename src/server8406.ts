
const express = require('express')
import {handler8406} from "./handler8406";
const app = express()
app.get('/8406', handler8406)
app.listen(3000, () => {})
        