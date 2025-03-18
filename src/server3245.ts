
const express = require('express')
import {handler3245} from "./handler3245";
const app = express()
app.get('/3245', handler3245)
app.listen(3000, () => {})
        