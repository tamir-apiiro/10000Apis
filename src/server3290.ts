
const express = require('express')
import {handler3290} from "./handler3290";
const app = express()
app.get('/3290', handler3290)
app.listen(3000, () => {})
        