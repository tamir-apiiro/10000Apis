
const express = require('express')
import {handler5108} from "./handler5108";
const app = express()
app.get('/5108', handler5108)
app.listen(3000, () => {})
        