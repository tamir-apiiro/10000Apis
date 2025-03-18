
const express = require('express')
import {handler6391} from "./handler6391";
const app = express()
app.get('/6391', handler6391)
app.listen(3000, () => {})
        