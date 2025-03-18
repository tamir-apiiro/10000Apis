
const express = require('express')
import {handler2274} from "./handler2274";
const app = express()
app.get('/2274', handler2274)
app.listen(3000, () => {})
        