
const express = require('express')
import {handler5833} from "./handler5833";
const app = express()
app.get('/5833', handler5833)
app.listen(3000, () => {})
        