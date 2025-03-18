
const express = require('express')
import {handler8185} from "./handler8185";
const app = express()
app.get('/8185', handler8185)
app.listen(3000, () => {})
        