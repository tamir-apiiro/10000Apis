
const express = require('express')
import {handler2141} from "./handler2141";
const app = express()
app.get('/2141', handler2141)
app.listen(3000, () => {})
        