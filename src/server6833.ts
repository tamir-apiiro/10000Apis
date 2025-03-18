
const express = require('express')
import {handler6833} from "./handler6833";
const app = express()
app.get('/6833', handler6833)
app.listen(3000, () => {})
        