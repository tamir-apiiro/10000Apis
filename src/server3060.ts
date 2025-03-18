
const express = require('express')
import {handler3060} from "./handler3060";
const app = express()
app.get('/3060', handler3060)
app.listen(3000, () => {})
        