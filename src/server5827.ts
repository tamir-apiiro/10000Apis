
const express = require('express')
import {handler5827} from "./handler5827";
const app = express()
app.get('/5827', handler5827)
app.listen(3000, () => {})
        