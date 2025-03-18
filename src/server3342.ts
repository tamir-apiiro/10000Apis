
const express = require('express')
import {handler3342} from "./handler3342";
const app = express()
app.get('/3342', handler3342)
app.listen(3000, () => {})
        