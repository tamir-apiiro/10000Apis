
const express = require('express')
import {handler3422} from "./handler3422";
const app = express()
app.get('/3422', handler3422)
app.listen(3000, () => {})
        