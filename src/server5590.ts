
const express = require('express')
import {handler5590} from "./handler5590";
const app = express()
app.get('/5590', handler5590)
app.listen(3000, () => {})
        