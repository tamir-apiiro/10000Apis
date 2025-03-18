
const express = require('express')
import {handler3634} from "./handler3634";
const app = express()
app.get('/3634', handler3634)
app.listen(3000, () => {})
        