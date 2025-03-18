
const express = require('express')
import {handler3903} from "./handler3903";
const app = express()
app.get('/3903', handler3903)
app.listen(3000, () => {})
        