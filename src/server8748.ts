
const express = require('express')
import {handler8748} from "./handler8748";
const app = express()
app.get('/8748', handler8748)
app.listen(3000, () => {})
        