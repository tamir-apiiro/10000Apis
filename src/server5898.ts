
const express = require('express')
import {handler5898} from "./handler5898";
const app = express()
app.get('/5898', handler5898)
app.listen(3000, () => {})
        