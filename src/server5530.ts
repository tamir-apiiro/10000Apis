
const express = require('express')
import {handler5530} from "./handler5530";
const app = express()
app.get('/5530', handler5530)
app.listen(3000, () => {})
        