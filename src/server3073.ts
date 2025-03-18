
const express = require('express')
import {handler3073} from "./handler3073";
const app = express()
app.get('/3073', handler3073)
app.listen(3000, () => {})
        