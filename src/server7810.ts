
const express = require('express')
import {handler7810} from "./handler7810";
const app = express()
app.get('/7810', handler7810)
app.listen(3000, () => {})
        