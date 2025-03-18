
const express = require('express')
import {handler5940} from "./handler5940";
const app = express()
app.get('/5940', handler5940)
app.listen(3000, () => {})
        