
const express = require('express')
import {handler3626} from "./handler3626";
const app = express()
app.get('/3626', handler3626)
app.listen(3000, () => {})
        