
const express = require('express')
import {handler5328} from "./handler5328";
const app = express()
app.get('/5328', handler5328)
app.listen(3000, () => {})
        