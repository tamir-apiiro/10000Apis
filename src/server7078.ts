
const express = require('express')
import {handler7078} from "./handler7078";
const app = express()
app.get('/7078', handler7078)
app.listen(3000, () => {})
        