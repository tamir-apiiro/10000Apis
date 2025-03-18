
const express = require('express')
import {handler5892} from "./handler5892";
const app = express()
app.get('/5892', handler5892)
app.listen(3000, () => {})
        