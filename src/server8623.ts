
const express = require('express')
import {handler8623} from "./handler8623";
const app = express()
app.get('/8623', handler8623)
app.listen(3000, () => {})
        