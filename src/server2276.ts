
const express = require('express')
import {handler2276} from "./handler2276";
const app = express()
app.get('/2276', handler2276)
app.listen(3000, () => {})
        