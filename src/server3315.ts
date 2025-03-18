
const express = require('express')
import {handler3315} from "./handler3315";
const app = express()
app.get('/3315', handler3315)
app.listen(3000, () => {})
        