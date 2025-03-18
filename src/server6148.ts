
const express = require('express')
import {handler6148} from "./handler6148";
const app = express()
app.get('/6148', handler6148)
app.listen(3000, () => {})
        