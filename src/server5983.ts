
const express = require('express')
import {handler5983} from "./handler5983";
const app = express()
app.get('/5983', handler5983)
app.listen(3000, () => {})
        