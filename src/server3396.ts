
const express = require('express')
import {handler3396} from "./handler3396";
const app = express()
app.get('/3396', handler3396)
app.listen(3000, () => {})
        