
const express = require('express')
import {handler3192} from "./handler3192";
const app = express()
app.get('/3192', handler3192)
app.listen(3000, () => {})
        