
const express = require('express')
import {handler3810} from "./handler3810";
const app = express()
app.get('/3810', handler3810)
app.listen(3000, () => {})
        