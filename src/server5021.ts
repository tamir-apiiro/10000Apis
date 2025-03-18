
const express = require('express')
import {handler5021} from "./handler5021";
const app = express()
app.get('/5021', handler5021)
app.listen(3000, () => {})
        