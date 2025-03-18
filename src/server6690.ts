
const express = require('express')
import {handler6690} from "./handler6690";
const app = express()
app.get('/6690', handler6690)
app.listen(3000, () => {})
        