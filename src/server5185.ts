
const express = require('express')
import {handler5185} from "./handler5185";
const app = express()
app.get('/5185', handler5185)
app.listen(3000, () => {})
        