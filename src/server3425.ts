
const express = require('express')
import {handler3425} from "./handler3425";
const app = express()
app.get('/3425', handler3425)
app.listen(3000, () => {})
        