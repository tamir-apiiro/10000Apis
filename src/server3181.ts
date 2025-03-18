
const express = require('express')
import {handler3181} from "./handler3181";
const app = express()
app.get('/3181', handler3181)
app.listen(3000, () => {})
        