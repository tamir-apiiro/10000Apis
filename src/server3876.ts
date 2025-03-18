
const express = require('express')
import {handler3876} from "./handler3876";
const app = express()
app.get('/3876', handler3876)
app.listen(3000, () => {})
        