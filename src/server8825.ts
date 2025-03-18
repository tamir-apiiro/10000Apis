
const express = require('express')
import {handler8825} from "./handler8825";
const app = express()
app.get('/8825', handler8825)
app.listen(3000, () => {})
        