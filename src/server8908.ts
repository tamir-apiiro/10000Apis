
const express = require('express')
import {handler8908} from "./handler8908";
const app = express()
app.get('/8908', handler8908)
app.listen(3000, () => {})
        