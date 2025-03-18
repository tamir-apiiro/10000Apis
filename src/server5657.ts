
const express = require('express')
import {handler5657} from "./handler5657";
const app = express()
app.get('/5657', handler5657)
app.listen(3000, () => {})
        