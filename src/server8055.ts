
const express = require('express')
import {handler8055} from "./handler8055";
const app = express()
app.get('/8055', handler8055)
app.listen(3000, () => {})
        