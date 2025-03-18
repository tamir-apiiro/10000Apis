
const express = require('express')
import {handler3646} from "./handler3646";
const app = express()
app.get('/3646', handler3646)
app.listen(3000, () => {})
        