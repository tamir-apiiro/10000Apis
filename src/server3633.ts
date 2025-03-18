
const express = require('express')
import {handler3633} from "./handler3633";
const app = express()
app.get('/3633', handler3633)
app.listen(3000, () => {})
        