
const express = require('express')
import {handler518} from "./handler518";
const app = express()
app.get('/518', handler518)
app.listen(3000, () => {})
        