
const express = require('express')
import {handler5143} from "./handler5143";
const app = express()
app.get('/5143', handler5143)
app.listen(3000, () => {})
        