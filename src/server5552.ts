
const express = require('express')
import {handler5552} from "./handler5552";
const app = express()
app.get('/5552', handler5552)
app.listen(3000, () => {})
        