
const express = require('express')
import {handler3281} from "./handler3281";
const app = express()
app.get('/3281', handler3281)
app.listen(3000, () => {})
        