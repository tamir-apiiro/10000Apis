
const express = require('express')
import {handler2711} from "./handler2711";
const app = express()
app.get('/2711', handler2711)
app.listen(3000, () => {})
        