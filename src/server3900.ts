
const express = require('express')
import {handler3900} from "./handler3900";
const app = express()
app.get('/3900', handler3900)
app.listen(3000, () => {})
        