
const express = require('express')
import {handler3175} from "./handler3175";
const app = express()
app.get('/3175', handler3175)
app.listen(3000, () => {})
        