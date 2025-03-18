
const express = require('express')
import {handler7600} from "./handler7600";
const app = express()
app.get('/7600', handler7600)
app.listen(3000, () => {})
        