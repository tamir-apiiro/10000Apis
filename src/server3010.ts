
const express = require('express')
import {handler3010} from "./handler3010";
const app = express()
app.get('/3010', handler3010)
app.listen(3000, () => {})
        