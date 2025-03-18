
const express = require('express')
import {handler8134} from "./handler8134";
const app = express()
app.get('/8134', handler8134)
app.listen(3000, () => {})
        