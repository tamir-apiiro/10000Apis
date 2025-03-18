
const express = require('express')
import {handler3239} from "./handler3239";
const app = express()
app.get('/3239', handler3239)
app.listen(3000, () => {})
        