
const express = require('express')
import {handler775} from "./handler775";
const app = express()
app.get('/775', handler775)
app.listen(3000, () => {})
        