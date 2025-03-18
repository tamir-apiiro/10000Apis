
const express = require('express')
import {handler712} from "./handler712";
const app = express()
app.get('/712', handler712)
app.listen(3000, () => {})
        