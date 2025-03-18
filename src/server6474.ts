
const express = require('express')
import {handler6474} from "./handler6474";
const app = express()
app.get('/6474', handler6474)
app.listen(3000, () => {})
        