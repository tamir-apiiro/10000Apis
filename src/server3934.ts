
const express = require('express')
import {handler3934} from "./handler3934";
const app = express()
app.get('/3934', handler3934)
app.listen(3000, () => {})
        