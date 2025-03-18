
const express = require('express')
import {handler8939} from "./handler8939";
const app = express()
app.get('/8939', handler8939)
app.listen(3000, () => {})
        