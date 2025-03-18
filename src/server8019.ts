
const express = require('express')
import {handler8019} from "./handler8019";
const app = express()
app.get('/8019', handler8019)
app.listen(3000, () => {})
        