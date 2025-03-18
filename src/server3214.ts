
const express = require('express')
import {handler3214} from "./handler3214";
const app = express()
app.get('/3214', handler3214)
app.listen(3000, () => {})
        