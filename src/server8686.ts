
const express = require('express')
import {handler8686} from "./handler8686";
const app = express()
app.get('/8686', handler8686)
app.listen(3000, () => {})
        