
const express = require('express')
import {handler6021} from "./handler6021";
const app = express()
app.get('/6021', handler6021)
app.listen(3000, () => {})
        