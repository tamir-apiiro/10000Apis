
const express = require('express')
import {handler3518} from "./handler3518";
const app = express()
app.get('/3518', handler3518)
app.listen(3000, () => {})
        