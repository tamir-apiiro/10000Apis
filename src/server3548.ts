
const express = require('express')
import {handler3548} from "./handler3548";
const app = express()
app.get('/3548', handler3548)
app.listen(3000, () => {})
        