
const express = require('express')
import {handler3092} from "./handler3092";
const app = express()
app.get('/3092', handler3092)
app.listen(3000, () => {})
        