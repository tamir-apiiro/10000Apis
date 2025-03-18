
const express = require('express')
import {handler3979} from "./handler3979";
const app = express()
app.get('/3979', handler3979)
app.listen(3000, () => {})
        