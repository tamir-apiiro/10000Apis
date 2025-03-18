
const express = require('express')
import {handler8886} from "./handler8886";
const app = express()
app.get('/8886', handler8886)
app.listen(3000, () => {})
        