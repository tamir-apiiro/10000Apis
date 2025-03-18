
const express = require('express')
import {handler2108} from "./handler2108";
const app = express()
app.get('/2108', handler2108)
app.listen(3000, () => {})
        