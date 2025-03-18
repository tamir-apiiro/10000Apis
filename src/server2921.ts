
const express = require('express')
import {handler2921} from "./handler2921";
const app = express()
app.get('/2921', handler2921)
app.listen(3000, () => {})
        