
const express = require('express')
import {handler8474} from "./handler8474";
const app = express()
app.get('/8474', handler8474)
app.listen(3000, () => {})
        