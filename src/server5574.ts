
const express = require('express')
import {handler5574} from "./handler5574";
const app = express()
app.get('/5574', handler5574)
app.listen(3000, () => {})
        