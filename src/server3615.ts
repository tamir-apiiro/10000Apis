
const express = require('express')
import {handler3615} from "./handler3615";
const app = express()
app.get('/3615', handler3615)
app.listen(3000, () => {})
        