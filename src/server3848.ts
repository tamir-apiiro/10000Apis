
const express = require('express')
import {handler3848} from "./handler3848";
const app = express()
app.get('/3848', handler3848)
app.listen(3000, () => {})
        