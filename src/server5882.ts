
const express = require('express')
import {handler5882} from "./handler5882";
const app = express()
app.get('/5882', handler5882)
app.listen(3000, () => {})
        