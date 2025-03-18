
const express = require('express')
import {handler7646} from "./handler7646";
const app = express()
app.get('/7646', handler7646)
app.listen(3000, () => {})
        