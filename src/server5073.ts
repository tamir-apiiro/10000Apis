
const express = require('express')
import {handler5073} from "./handler5073";
const app = express()
app.get('/5073', handler5073)
app.listen(3000, () => {})
        