
const express = require('express')
import {handler3522} from "./handler3522";
const app = express()
app.get('/3522', handler3522)
app.listen(3000, () => {})
        