
const express = require('express')
import {handler8512} from "./handler8512";
const app = express()
app.get('/8512', handler8512)
app.listen(3000, () => {})
        