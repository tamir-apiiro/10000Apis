
const express = require('express')
import {handler3183} from "./handler3183";
const app = express()
app.get('/3183', handler3183)
app.listen(3000, () => {})
        