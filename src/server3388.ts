
const express = require('express')
import {handler3388} from "./handler3388";
const app = express()
app.get('/3388', handler3388)
app.listen(3000, () => {})
        