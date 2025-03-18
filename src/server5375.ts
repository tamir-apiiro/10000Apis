
const express = require('express')
import {handler5375} from "./handler5375";
const app = express()
app.get('/5375', handler5375)
app.listen(3000, () => {})
        