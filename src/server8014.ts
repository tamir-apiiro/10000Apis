
const express = require('express')
import {handler8014} from "./handler8014";
const app = express()
app.get('/8014', handler8014)
app.listen(3000, () => {})
        