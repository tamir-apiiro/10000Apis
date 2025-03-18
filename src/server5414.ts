
const express = require('express')
import {handler5414} from "./handler5414";
const app = express()
app.get('/5414', handler5414)
app.listen(3000, () => {})
        