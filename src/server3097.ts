
const express = require('express')
import {handler3097} from "./handler3097";
const app = express()
app.get('/3097', handler3097)
app.listen(3000, () => {})
        