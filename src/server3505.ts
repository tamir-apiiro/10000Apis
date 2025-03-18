
const express = require('express')
import {handler3505} from "./handler3505";
const app = express()
app.get('/3505', handler3505)
app.listen(3000, () => {})
        