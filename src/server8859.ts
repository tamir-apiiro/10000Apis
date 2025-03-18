
const express = require('express')
import {handler8859} from "./handler8859";
const app = express()
app.get('/8859', handler8859)
app.listen(3000, () => {})
        