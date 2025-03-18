
const express = require('express')
import {handler8866} from "./handler8866";
const app = express()
app.get('/8866', handler8866)
app.listen(3000, () => {})
        