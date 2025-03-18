
const express = require('express')
import {handler3496} from "./handler3496";
const app = express()
app.get('/3496', handler3496)
app.listen(3000, () => {})
        