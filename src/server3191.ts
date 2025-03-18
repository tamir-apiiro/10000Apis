
const express = require('express')
import {handler3191} from "./handler3191";
const app = express()
app.get('/3191', handler3191)
app.listen(3000, () => {})
        