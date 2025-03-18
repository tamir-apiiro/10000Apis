
const express = require('express')
import {handler8810} from "./handler8810";
const app = express()
app.get('/8810', handler8810)
app.listen(3000, () => {})
        