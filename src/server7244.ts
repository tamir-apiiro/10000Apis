
const express = require('express')
import {handler7244} from "./handler7244";
const app = express()
app.get('/7244', handler7244)
app.listen(3000, () => {})
        