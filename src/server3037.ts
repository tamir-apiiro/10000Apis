
const express = require('express')
import {handler3037} from "./handler3037";
const app = express()
app.get('/3037', handler3037)
app.listen(3000, () => {})
        