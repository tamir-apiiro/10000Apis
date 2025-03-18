
const express = require('express')
import {handler6649} from "./handler6649";
const app = express()
app.get('/6649', handler6649)
app.listen(3000, () => {})
        