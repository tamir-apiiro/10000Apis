
const express = require('express')
import {handler6407} from "./handler6407";
const app = express()
app.get('/6407', handler6407)
app.listen(3000, () => {})
        