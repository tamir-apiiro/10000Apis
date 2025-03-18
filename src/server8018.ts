
const express = require('express')
import {handler8018} from "./handler8018";
const app = express()
app.get('/8018', handler8018)
app.listen(3000, () => {})
        