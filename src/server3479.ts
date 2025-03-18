
const express = require('express')
import {handler3479} from "./handler3479";
const app = express()
app.get('/3479', handler3479)
app.listen(3000, () => {})
        