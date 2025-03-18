
const express = require('express')
import {handler3772} from "./handler3772";
const app = express()
app.get('/3772', handler3772)
app.listen(3000, () => {})
        