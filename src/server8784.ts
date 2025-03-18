
const express = require('express')
import {handler8784} from "./handler8784";
const app = express()
app.get('/8784', handler8784)
app.listen(3000, () => {})
        