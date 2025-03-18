
const express = require('express')
import {handler3711} from "./handler3711";
const app = express()
app.get('/3711', handler3711)
app.listen(3000, () => {})
        