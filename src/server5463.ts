
const express = require('express')
import {handler5463} from "./handler5463";
const app = express()
app.get('/5463', handler5463)
app.listen(3000, () => {})
        