
const express = require('express')
import {handler3182} from "./handler3182";
const app = express()
app.get('/3182', handler3182)
app.listen(3000, () => {})
        