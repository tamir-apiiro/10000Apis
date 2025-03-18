
const express = require('express')
import {handler6058} from "./handler6058";
const app = express()
app.get('/6058', handler6058)
app.listen(3000, () => {})
        