
const express = require('express')
import {handler5355} from "./handler5355";
const app = express()
app.get('/5355', handler5355)
app.listen(3000, () => {})
        