
const express = require('express')
import {handler3921} from "./handler3921";
const app = express()
app.get('/3921', handler3921)
app.listen(3000, () => {})
        