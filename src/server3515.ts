
const express = require('express')
import {handler3515} from "./handler3515";
const app = express()
app.get('/3515', handler3515)
app.listen(3000, () => {})
        