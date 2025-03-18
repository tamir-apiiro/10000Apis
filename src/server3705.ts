
const express = require('express')
import {handler3705} from "./handler3705";
const app = express()
app.get('/3705', handler3705)
app.listen(3000, () => {})
        