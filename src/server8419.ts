
const express = require('express')
import {handler8419} from "./handler8419";
const app = express()
app.get('/8419', handler8419)
app.listen(3000, () => {})
        