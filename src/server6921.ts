
const express = require('express')
import {handler6921} from "./handler6921";
const app = express()
app.get('/6921', handler6921)
app.listen(3000, () => {})
        