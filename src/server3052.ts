
const express = require('express')
import {handler3052} from "./handler3052";
const app = express()
app.get('/3052', handler3052)
app.listen(3000, () => {})
        