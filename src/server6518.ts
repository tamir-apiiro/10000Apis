
const express = require('express')
import {handler6518} from "./handler6518";
const app = express()
app.get('/6518', handler6518)
app.listen(3000, () => {})
        