
const express = require('express')
import {handler6127} from "./handler6127";
const app = express()
app.get('/6127', handler6127)
app.listen(3000, () => {})
        