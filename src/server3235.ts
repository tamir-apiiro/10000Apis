
const express = require('express')
import {handler3235} from "./handler3235";
const app = express()
app.get('/3235', handler3235)
app.listen(3000, () => {})
        