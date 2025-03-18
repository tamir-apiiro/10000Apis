
const express = require('express')
import {handler3967} from "./handler3967";
const app = express()
app.get('/3967', handler3967)
app.listen(3000, () => {})
        