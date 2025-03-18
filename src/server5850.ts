
const express = require('express')
import {handler5850} from "./handler5850";
const app = express()
app.get('/5850', handler5850)
app.listen(3000, () => {})
        