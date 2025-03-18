
const express = require('express')
import {handler8235} from "./handler8235";
const app = express()
app.get('/8235', handler8235)
app.listen(3000, () => {})
        