
const express = require('express')
import {handler7393} from "./handler7393";
const app = express()
app.get('/7393', handler7393)
app.listen(3000, () => {})
        