
const express = require('express')
import {handler962} from "./handler962";
const app = express()
app.get('/962', handler962)
app.listen(3000, () => {})
        