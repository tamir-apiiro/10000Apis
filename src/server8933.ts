
const express = require('express')
import {handler8933} from "./handler8933";
const app = express()
app.get('/8933', handler8933)
app.listen(3000, () => {})
        