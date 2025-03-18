
const express = require('express')
import {handler6784} from "./handler6784";
const app = express()
app.get('/6784', handler6784)
app.listen(3000, () => {})
        