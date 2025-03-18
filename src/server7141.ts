
const express = require('express')
import {handler7141} from "./handler7141";
const app = express()
app.get('/7141', handler7141)
app.listen(3000, () => {})
        