
const express = require('express')
import {handler5722} from "./handler5722";
const app = express()
app.get('/5722', handler5722)
app.listen(3000, () => {})
        