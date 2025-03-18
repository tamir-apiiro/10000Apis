
const express = require('express')
import {handler5399} from "./handler5399";
const app = express()
app.get('/5399', handler5399)
app.listen(3000, () => {})
        