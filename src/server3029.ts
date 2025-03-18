
const express = require('express')
import {handler3029} from "./handler3029";
const app = express()
app.get('/3029', handler3029)
app.listen(3000, () => {})
        