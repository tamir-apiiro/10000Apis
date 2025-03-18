
const express = require('express')
import {handler423} from "./handler423";
const app = express()
app.get('/423', handler423)
app.listen(3000, () => {})
        