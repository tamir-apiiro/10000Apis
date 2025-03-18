
const express = require('express')
import {handler5453} from "./handler5453";
const app = express()
app.get('/5453', handler5453)
app.listen(3000, () => {})
        