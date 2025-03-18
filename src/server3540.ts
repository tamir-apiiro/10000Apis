
const express = require('express')
import {handler3540} from "./handler3540";
const app = express()
app.get('/3540', handler3540)
app.listen(3000, () => {})
        