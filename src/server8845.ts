
const express = require('express')
import {handler8845} from "./handler8845";
const app = express()
app.get('/8845', handler8845)
app.listen(3000, () => {})
        