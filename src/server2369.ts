
const express = require('express')
import {handler2369} from "./handler2369";
const app = express()
app.get('/2369', handler2369)
app.listen(3000, () => {})
        