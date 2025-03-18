
const express = require('express')
import {handler8913} from "./handler8913";
const app = express()
app.get('/8913', handler8913)
app.listen(3000, () => {})
        