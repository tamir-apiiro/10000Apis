
const express = require('express')
import {handler32} from "./handler32";
const app = express()
app.get('/32', handler32)
app.listen(3000, () => {})
        