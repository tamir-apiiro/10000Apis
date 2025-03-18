
const express = require('express')
import {handler5124} from "./handler5124";
const app = express()
app.get('/5124', handler5124)
app.listen(3000, () => {})
        