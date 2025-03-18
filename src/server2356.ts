
const express = require('express')
import {handler2356} from "./handler2356";
const app = express()
app.get('/2356', handler2356)
app.listen(3000, () => {})
        