
const express = require('express')
import {handler3099} from "./handler3099";
const app = express()
app.get('/3099', handler3099)
app.listen(3000, () => {})
        