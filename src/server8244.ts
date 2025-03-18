
const express = require('express')
import {handler8244} from "./handler8244";
const app = express()
app.get('/8244', handler8244)
app.listen(3000, () => {})
        