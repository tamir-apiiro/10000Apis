
const express = require('express')
import {handler3730} from "./handler3730";
const app = express()
app.get('/3730', handler3730)
app.listen(3000, () => {})
        