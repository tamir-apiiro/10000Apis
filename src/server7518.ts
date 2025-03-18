
const express = require('express')
import {handler7518} from "./handler7518";
const app = express()
app.get('/7518', handler7518)
app.listen(3000, () => {})
        