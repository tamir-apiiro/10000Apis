
const express = require('express')
import {handler3106} from "./handler3106";
const app = express()
app.get('/3106', handler3106)
app.listen(3000, () => {})
        