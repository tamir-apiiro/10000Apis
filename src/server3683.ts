
const express = require('express')
import {handler3683} from "./handler3683";
const app = express()
app.get('/3683', handler3683)
app.listen(3000, () => {})
        