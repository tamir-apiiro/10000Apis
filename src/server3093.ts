
const express = require('express')
import {handler3093} from "./handler3093";
const app = express()
app.get('/3093', handler3093)
app.listen(3000, () => {})
        