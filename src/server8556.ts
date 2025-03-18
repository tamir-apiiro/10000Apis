
const express = require('express')
import {handler8556} from "./handler8556";
const app = express()
app.get('/8556', handler8556)
app.listen(3000, () => {})
        