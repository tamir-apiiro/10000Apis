
const express = require('express')
import {handler5972} from "./handler5972";
const app = express()
app.get('/5972', handler5972)
app.listen(3000, () => {})
        