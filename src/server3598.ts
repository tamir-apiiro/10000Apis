
const express = require('express')
import {handler3598} from "./handler3598";
const app = express()
app.get('/3598', handler3598)
app.listen(3000, () => {})
        