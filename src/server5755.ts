
const express = require('express')
import {handler5755} from "./handler5755";
const app = express()
app.get('/5755', handler5755)
app.listen(3000, () => {})
        