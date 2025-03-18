
const express = require('express')
import {handler496} from "./handler496";
const app = express()
app.get('/496', handler496)
app.listen(3000, () => {})
        