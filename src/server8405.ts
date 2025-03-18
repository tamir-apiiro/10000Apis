
const express = require('express')
import {handler8405} from "./handler8405";
const app = express()
app.get('/8405', handler8405)
app.listen(3000, () => {})
        