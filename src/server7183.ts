
const express = require('express')
import {handler7183} from "./handler7183";
const app = express()
app.get('/7183', handler7183)
app.listen(3000, () => {})
        