
const express = require('express')
import {handler3519} from "./handler3519";
const app = express()
app.get('/3519', handler3519)
app.listen(3000, () => {})
        