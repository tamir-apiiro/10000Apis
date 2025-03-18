
const express = require('express')
import {handler249} from "./handler249";
const app = express()
app.get('/249', handler249)
app.listen(3000, () => {})
        