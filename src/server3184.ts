
const express = require('express')
import {handler3184} from "./handler3184";
const app = express()
app.get('/3184', handler3184)
app.listen(3000, () => {})
        