
const express = require('express')
import {handler3913} from "./handler3913";
const app = express()
app.get('/3913', handler3913)
app.listen(3000, () => {})
        