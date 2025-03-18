
const express = require('express')
import {handler7712} from "./handler7712";
const app = express()
app.get('/7712', handler7712)
app.listen(3000, () => {})
        