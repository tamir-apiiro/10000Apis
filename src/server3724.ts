
const express = require('express')
import {handler3724} from "./handler3724";
const app = express()
app.get('/3724', handler3724)
app.listen(3000, () => {})
        