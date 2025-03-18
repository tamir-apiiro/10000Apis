
const express = require('express')
import {handler6317} from "./handler6317";
const app = express()
app.get('/6317', handler6317)
app.listen(3000, () => {})
        