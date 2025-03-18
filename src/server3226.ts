
const express = require('express')
import {handler3226} from "./handler3226";
const app = express()
app.get('/3226', handler3226)
app.listen(3000, () => {})
        