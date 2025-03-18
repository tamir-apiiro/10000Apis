
const express = require('express')
import {handler6371} from "./handler6371";
const app = express()
app.get('/6371', handler6371)
app.listen(3000, () => {})
        