
const express = require('express')
import {handler6913} from "./handler6913";
const app = express()
app.get('/6913', handler6913)
app.listen(3000, () => {})
        