
const express = require('express')
import {handler5290} from "./handler5290";
const app = express()
app.get('/5290', handler5290)
app.listen(3000, () => {})
        