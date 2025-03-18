
const express = require('express')
import {handler2555} from "./handler2555";
const app = express()
app.get('/2555', handler2555)
app.listen(3000, () => {})
        