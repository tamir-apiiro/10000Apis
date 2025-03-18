
const express = require('express')
import {handler3084} from "./handler3084";
const app = express()
app.get('/3084', handler3084)
app.listen(3000, () => {})
        